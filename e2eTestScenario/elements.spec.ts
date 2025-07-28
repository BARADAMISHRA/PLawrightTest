import test from '@playwright/test'

test("Verify element visible", async ({page})=>{

    await page.goto('https://demoqa.com/dynamic-properties')

    const lo=  page.locator('#enableAfter')

  console.log(await lo.isEnabled())

   console.log (await lo.isDisabled())

//   console.log(await lo.isEditable())

 console.log(await lo.isHidden())
})

test.only("Veriy the wait ", async({page})=>{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/dynamic-prop.php")

    await page.waitForFunction(()=> document.title==='Selenium Practice - Dynamic Properties')
    await page.getByText("Color Change",{exact: true}).click()

    // await page.waitForSelector('#visibleAfter')

    await page.locator('#visibleAfter').waitFor({state: 'visible'})

  console.log(await page.locator('#visibleAfter').textContent())
})