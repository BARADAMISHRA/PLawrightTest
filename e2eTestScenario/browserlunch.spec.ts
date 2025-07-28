
import test from 'playwright/test'

test.only("lunching chrome browser",  async ({page})=>{

    await page.goto("https://www.google.com")

})


