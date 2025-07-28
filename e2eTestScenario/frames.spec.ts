import test from '@playwright/test'

test("", async({page})=>{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/frames.php")

    const iframe1= page.frameLocator('iframe[src="new-tab-sample.php"]').first()

    await iframe1.locator('iframe[href="/selenium/index.htm"]').nth(0).click()

    await page.pause()
} )

test("no of frames",async ({page})=>{

   await page.goto("https://www.tutorialspoint.com/selenium/practice/frames.php")
   
   const noOfFrames= page.frames()

   console.log("number of frames" +noOfFrames)

   for(const frame of noOfFrames){
    console.log(frame.name())
    console.log(frame.url())
   }
})

test.only("test 2",async({page})=>{

    await page.goto("https://demoqa.com/nestedframes")

    // await page.waitForTimeout(16000)
    // await page.waitForLoadState('networkidle')

    const frames=page.frames()

    console.log("number of frames "+ frames.length)

    const parentFrame= page.frameLocator('#frame1')

  const data=  await parentFrame.getByText('Parent frame').last().textContent()
    console.log(data)

    const childFrame=parentFrame.frameLocator("[srcdoc='<p>Child Iframe</p>']")

    const data1= await childFrame.getByText('Child Iframe').first().textContent()
    console.log(data1)
})