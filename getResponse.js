const puppeteer = require('puppeteer-v24'); // v23.0.0 or later
require('dotenv').config()

const getRes = async (name) => {
    let browser;
    try {
        browser = await puppeteer.launch({ headless: false });
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
                targetPage.locator('#sfdc_username_container'),
                targetPage.locator('::-p-xpath(//*[@id=\\"sfdc_username_container\\"])'),
                targetPage.locator(':scope >>> #sfdc_username_container')
            ])
                .setTimeout(timeout)
                .click();
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(Username)'),
                targetPage.locator('#\\31 57\\:0'),
                targetPage.locator('::-p-xpath(//*[@id=\\"157:0\\"])'),
                targetPage.locator(':scope >>> #\\31 57\\:0')
            ])
                .setTimeout(timeout)
                .click();
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(Username)'),
                targetPage.locator('#\\31 57\\:0'),
                targetPage.locator('::-p-xpath(//*[@id=\\"157:0\\"])'),
                targetPage.locator(':scope >>> #\\31 57\\:0')
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
                targetPage.locator('#\\31 70\\:0'),
                targetPage.locator('::-p-xpath(//*[@id=\\"170:0\\"])'),
                targetPage.locator(':scope >>> #\\31 70\\:0')
            ])
                .setTimeout(timeout)
                .fill('R');
        }
        {
            const targetPage = page;
            await targetPage.keyboard.up('r');
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(Password)'),
                targetPage.locator('#\\31 70\\:0'),
                targetPage.locator('::-p-xpath(//*[@id=\\"170:0\\"])'),
                targetPage.locator(':scope >>> #\\31 70\\:0')
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
            const element = await page.waitForSelector('span.slds-truncate.uiOutputText')
            let value = await page.evaluate(el => el.innerText, element)
            if(name !== value){
               throw new Error("Lead not submitted");
            }
        }
        {
            const targetPage = page;

            const lead = await targetPage.waitForSelector('tr:nth-of-type(1) > td:nth-of-type(4) > span');
            let value = await page.evaluate(el => el.innerText, lead)
            return {status: value};

        }
    }
    catch (err) {
        return { error: err.message };
    }
    finally {
        if(browser)
        await browser.close();
    }
}

module.exports = { getRes }

// console.log(getRes("noel"));