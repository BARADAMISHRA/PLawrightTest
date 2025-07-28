import test from '@playwright/test'

test.only("table operation",async ({page})=>{

    await page.goto("https://demoqa.com/webtables")

    const noOfRows=page.locator('[class="rt-tr-group"]')

    console.log(noOfRows.count())

    for(let i=0;i<await noOfRows.count();i++){

        const firstName=await noOfRows.nth(i).locator('[class="rt-td"]').nth(0).textContent()
        console.log(firstName)

        if(firstName==='Alden'){
            await noOfRows.nth(i).locator('[class="rt-td"]').nth(6).click()
            break;
        }

    }
    await page.pause()
})