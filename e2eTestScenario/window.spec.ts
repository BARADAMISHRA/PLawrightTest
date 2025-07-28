import test from '@playwright/test'

test("",async ({page,context})=>{


    await page.goto("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open")

    const frame=page.frameLocator('#iframeResult')

    const [newPage] = await Promise.all([

        context.waitForEvent('page'),

        frame.locator('button').click()

    ])

 console.log(await newPage.title())

    await newPage.pause()

    await page.pause()
})


test.only("new page opeartion", async ({page,context})=>{

    await page.goto("https://demoqa.com/browser-windows")

    const [newPage]=  await Promise.all([

        context.waitForEvent('page'),
        page.locator('#tabButton').click()
    ])

    await newPage.waitForLoadState('networkidle')
   console.log(await newPage.title());

 
 await newPage.pause()
 await page.pause()
})