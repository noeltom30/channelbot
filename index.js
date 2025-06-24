const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { runPuppy } = require('./puppy.js');
const { inputParser } = require('./inputParser.js');
const { getRes } = require('./getResponse.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
});

let target = "120363417311359596@g.us";
let target2 = "-1";
client.on('ready', async () => {
    console.log('Client is ready!');
    if (target === "-1") {
        console.log('Searching for group');
        const chats = await client.getChats();
        const group = chats.find(chat => chat.isGroup && chat.name === 'Bottest')
        target = group.id._serialized;
        if (group)
            console.log(`Group ID: ${target}`)
        else
            console.log('Not found');
    }
    if (target2 === "-1") {
        console.log('Searching for group');
        const chats = await client.getChats();
        const group = chats.find(chat => chat.isGroup && chat.name === 'Bottest2')
        target2 = group.id._serialized;
        if (group)
            console.log(`Group ID: ${target2}`)
        else
            console.log('Not found');
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('message', async message => {
    console.log(message.body);
    let reply = "";
    if (message.from === target || message.from === target2){
        let jsonRes = inputParser(message.body);
        console.log(jsonRes);
        let reply = "";
        if (jsonRes.error) {
            reply = jsonRes.error;
            let formatMessage = "Please ensure the following format is followed\n Client name: \n Mobile no: \n Project: \n STM:"
            message.reply(reply+formatMessage);
        }
        else {
            let runresult;
            try {
                runresult = await runPuppy(jsonRes[0], jsonRes[1], jsonRes[2], jsonRes[3]);
                if (runresult.error) {
                    throw new Error("Failed to submit lead: #1")
                }
                else {
                    let status = await getRes(jsonRes[0]);
                    if (!status.error) {
                        reply = status.name + " - " + status.status;
                    }
                    else
                        throw new Error("Failed to submit lead: #2 ")
                }
            } catch (err) {
                reply = err.message;
            }
            finally {
                message.reply(reply);
            }
        }
    }
});

client.initialize();

