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

client.on('ready', async () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('message_create', async message => {
    console.log(message.body);
    if(message.fromMe)
        message.reply("testing bot please ignore if something goes horribly wrong and this ends up getting sent to everyone on my whatsapp");
});

client.initialize();

