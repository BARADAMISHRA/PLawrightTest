import test from '@playwright/test'

test.describe.parallel("parallel group",()=>{

    test("lunching google", async ({page})=>{

        await page.goto("https://www.google.com")
        console.log(await page.title())
        console.log( page.url())
    })

    test("facebook lunch",async ({page})=>{

        await page.goto('https://www.facebook.com')
        
        console.log(await page.title())
        console.log( page.url())
    })
})