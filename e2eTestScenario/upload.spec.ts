import { chromium } from '@playwright/test';
import test from '@playwright/test'
import path from 'path';
test("file upload",async ({page})=>{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/upload-download.php")

    await page.waitForLoadState('networkidle')
    const upload= page.locator('#uploadFile')
 const filePath = path.resolve('C:/Users/Barada/Pictures/PlaywrightTest/fullpage.png');

  await upload.setInputFiles(filePath);

  await page.waitForTimeout(8000)
    await page.pause()
})

test.only("download", async ()=>{

    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page=await context.newPage()

    await page.goto('https://www.tutorialspoint.com/selenium/practice/upload-download.php')



    await page.waitForSelector('#downloadButton')

    const [download]= await Promise.all([

        page.waitForEvent('download'),
        await page.locator('#downloadButton').click()
    ])

  const downloadPath = await download.path()

   await download.saveAs("./l.jpeg")
})
