const puppeteer = require("puppeteer");
require("dotenv").config();

(async() => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    })
    const page = await browser.newPage()
    await page.goto(process.env.url)

    // enter username
    const usernameField = await page.$("#username")
    await usernameField.type(process.env.username)
    // enter password
    const passwordField = await page.$("#password")
    await passwordField.type(process.env.password)
    // click on login button
    const loginBtn = await page.$("#login-form > div.form-group.form-buttons > button")
    await loginBtn.click()
    // Now we wait for sparx to redirect us
    await page.waitForNavigation()
    console.log("Sparx loaded successfully!")

    // We expose the function because page.evaluate is weird
    await page.exposeFunction("takeScreenshot", takeScreenshot)

    // here we add an event listener to the page
    await page.evaluate(() => {
        // when user clicks on the submit btn
        document.addEventListener('click', async(event) => {
            if(event.target.innerText === "Submit") {
                if(event.target.className === "right") return;
                let submit = document.getElementById("skill-delivery-submit-button")
                if(!submit) return false
                if(submit.className === "btn btn-disabled") {
                    console.log(`The button is disabled!`);
                } else {
                    try {
                        console.log("Attempting to take screenshot...")
                        await takeScreenshot()
                        console.log("Screenshot taken!")
                    } catch(e) {
                        console.error("Failed to take screenshot")
                    }
                }
            }
        });
        // when user presses enter
        document.addEventListener("keydown", async(event) => {
            if(event.key === "Enter") {
                let submit = document.getElementById("skill-delivery-submit-button")
                if(!submit) return;
                if(submit.className === "btn btn-disabled") {
                    console.log(`The button is disabled!`);
                } else {
                    try {
                        console.log("Attempting to take screenshot...")
                        await takeScreenshot()
                        console.log("Screenshot taken!")
                    } catch(e) {
                        console.error("Failed to take screenshot")
                    }
                }
            }
        })
    })

    // this is the function responsible to take the screenshot
    async function takeScreenshot() {
        let code = await page.$("#top-bar > div > div.bookwork-code.bookwork-code-clickable > span")
        let extractedCode = await code.evaluate(code => code.textContent, code)
        let bodyElement = await page.$("#app-container > div.screen > div.main-view > div > div")
        if(bodyElement) {
            await bodyElement.screenshot({
                path: `bookwork-codes/${extractedCode}.png`
            })
        } else {
            await page.screenshot({
                path: `bookwork-codes/${extractedCode}.png`
            })
        }
    }
})()
