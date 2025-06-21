const puppeteer = require('puppeteer-v24'); // v23.0.0 or laternpm
require('dotenv').config()
async function runPuppy(clientName = "joel", mobileNumber = "9037738663", project = "Townpark", stm = "Rinita Davis") {
    let browser;
    try {
        browser = await puppeteer.launch({ headless: false});
        const page = await browser.newPage();
        const timeout = 30000;
        page.setDefaultTimeout(timeout);

        {
            const targetPage = page;
            await targetPage.setViewport({
                width: 1879,
                height: 968
            })
        }
        {
            const targetPage = page;
            await targetPage.goto('https://sobha-developers.my.site.com/cpportal/s/login/');
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(Username)'),
                targetPage.locator('#\\31 55\\:0'),
                targetPage.locator('::-p-xpath(//*[@id=\\"155:0\\"])'),
                targetPage.locator(':scope >>> #\\31 55\\:0')
            ])
                .setTimeout(timeout)
                .click();
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(Username)'),
                targetPage.locator('#\\31 55\\:0'),
                targetPage.locator('::-p-xpath(//*[@id=\\"155:0\\"])'),
                targetPage.locator(':scope >>> #\\31 55\\:0')
            ])
                .setTimeout(timeout)
                .fill(String(process.env.email));
        }
        {
            const targetPage = page;
            await targetPage.keyboard.down('Tab');
        }
        {
            const targetPage = page;
            await targetPage.keyboard.up('Tab');
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(Password)'),
                targetPage.locator('#\\31 68\\:0'),
                targetPage.locator('::-p-xpath(//*[@id=\\"168:0\\"])'),
                targetPage.locator(':scope >>> #\\31 68\\:0')
            ])
                .setTimeout(timeout)
                .fill(String(process.env.password));
        }
        {
            const targetPage = page;
            await targetPage.keyboard.down('Enter');
        }
        {
            const targetPage = page;
            const promises = [];
            const startWaitingForEvents = () => {
                promises.push(targetPage.waitForNavigation());
            }
            await targetPage.keyboard.up('Enter');
            await Promise.all(promises);
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(New) >>>> ::-p-aria([role=\\"generic\\"])'),
                targetPage.locator('div:nth-of-type(1) > div.slds-no-flex div'),
                targetPage.locator('::-p-xpath(//*[@id=\\"506:0\\"]/div/div/div/div[1]/div[1]/div[2]/ul/li/a/div)'),
                targetPage.locator(':scope >>> div:nth-of-type(1) > div.slds-no-flex div'),
                targetPage.locator('::-p-text(New)')
            ])
                .setTimeout(timeout)
                .click();
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(*Customer Name)'),
                targetPage.locator('#input-81'),
                targetPage.locator('::-p-xpath(//*[@id=\\"input-81\\"])'),
                targetPage.locator(':scope >>> #input-81')
            ])
                .setTimeout(timeout)
                .click();
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(*Customer Name)'),
                targetPage.locator('#input-81'),
                targetPage.locator('::-p-xpath(//*[@id=\\"input-81\\"])'),
                targetPage.locator(':scope >>> #input-81')
            ])
                .setTimeout(timeout)
                .fill(clientName);
        }
        {
            const targetPage = page;
            await targetPage.keyboard.down('Tab');
        }
        {
            const targetPage = page;
            await targetPage.keyboard.up('Tab');
        }
        {
            const targetPage = page;
            await targetPage.keyboard.down('Tab');
        }
        {
            const targetPage = page;
            await targetPage.keyboard.up('Tab');
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(*Phone)'),
                targetPage.locator('#input-87'),
                targetPage.locator('::-p-xpath(//*[@id=\\"input-87\\"])'),
                targetPage.locator(':scope >>> #input-87')
            ])
                .setTimeout(timeout)
                .fill(mobileNumber);
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(Email[role=\\"textbox\\"])'),
                targetPage.locator('#input-90'),
                targetPage.locator('::-p-xpath(//*[@id=\\"input-90\\"])'),
                targetPage.locator(':scope >>> #input-90')
            ])
                .setTimeout(timeout)
                .click();
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(Sales Team Member)'),
                targetPage.locator('#combobox-input-102'),
                targetPage.locator('::-p-xpath(//*[@id=\\"combobox-input-102\\"])'),
                targetPage.locator(':scope >>> #combobox-input-102')
            ])
                .setTimeout(timeout)
                .click();
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(Sales Team Member)'),
                targetPage.locator('#combobox-input-102'),
                targetPage.locator('::-p-xpath(//*[@id=\\"combobox-input-102\\"])'),
                targetPage.locator(':scope >>> #combobox-input-102')
            ])
                .setTimeout(timeout)
                .fill(stm);
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(*Project)'),
                targetPage.locator('#combobox-input-95'),
                targetPage.locator('::-p-xpath(//*[@id=\\"combobox-input-95\\"])'),
                targetPage.locator(':scope >>> #input-95')
            ])
                .setTimeout(timeout)
                .click();
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(*Project)'),
                targetPage.locator('#combobox-input-95'),
                targetPage.locator('::-p-xpath(//*[@id=\\"combobox-input-95\\"])'),
                targetPage.locator(':scope >>> #combobox-input-95')
            ])
                .setTimeout(timeout)
                .fill(project);
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('ul span.slds-media__body > span'),
                targetPage.locator('::-p-xpath(//*[@id=\\"combobox-input-95-1-95\\"]/span[2]/span)'),
                targetPage.locator(':scope >>> ul span.slds-media__body > span')
            ])
                .setTimeout(timeout)
                .click();
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(Next)'),
                targetPage.locator('flowruntime-navigation-bar button'),
                targetPage.locator('::-p-xpath(//*[@id=\\"content_13:883;a\\"]/section/flowruntime-flow/flowruntime-navigation-bar/footer/div/lightning-button/button)'),
                targetPage.locator(':scope >>> flowruntime-navigation-bar button'),
                targetPage.locator('::-p-text(Next)')
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 24.15625,
                        y: 24,
                    },
                });
        }
        console.log("Submitted lead from temppuppy");
    } catch (err) {
        console.error("[temppuppy.js] Error:", err);
        return {error: err.message}
    } finally {
        if (browser) {
            await browser.close().catch(e => console.error("[temppuppy.js] Error closing browser:", e));
        }
    }
    return {error: false};
}

module.exports = { runPuppy };

if (require.main === module) {
    runPuppy().catch(console.error);
}
