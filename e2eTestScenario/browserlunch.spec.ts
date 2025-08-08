
import test from 'playwright/test'

test("lunching chrome browser",  async ({page})=>{

    await page.goto("https://www.google.com")

})


