import test from '@playwright/test'

test.only("login test on global auth",async ({page})=>{

    await page.goto("/")

    console.log(page.url)
})