import test from '@playwright/test'
import path from 'path'

test.only("screenshot practice", async ({page})=>{

await page.goto("https://www.tutorialspoint.com/selenium/practice/dynamic-prop.php")

await page.screenshot({path:"fullpage.png",fullPage:true})

await page.locator('#colorChange').screenshot({path:"elem.png"})

})