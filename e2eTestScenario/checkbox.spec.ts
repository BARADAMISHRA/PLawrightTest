import test from '@playwright/test'

test("check box operarion", async({page})=>{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")
   
    await page.locator('#hobbies').nth(0).check()
console.log(await page.locator('#hobbies').nth(0).isChecked())
  await page.locator('#hobbies').nth(0).uncheck()
console.log(await page.locator('#hobbies').nth(0).isChecked())
await page.pause()
})


test.only("check box operarion2", async({page})=>{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")

   const a=await page.getByText("Practice Form").first().innerText()
   console.log(a)
})