import test from 'playwright/test'

test("locating the web elements ",async ({page})=>{

//by Tag Name
    await page.goto("")

    await page.locator('input')

// by id 
await page.locator('#email')

//by classValue 
await page.locator('. shape-rectangle')

//by attribute 

page.locator("[placeHolder='email']")

// by full class Value
page.locator('[class="sas adad adaad"]')

//combine diff selectors
page.locator('input[placeholder="email"][nbinput].shaperectangle ')

//elements by xpath (not recomonded)
page.locator("//id[@name='lipu']")

//by partial text match
page.locator(':text("Using")')

//by exact match 
page.locator(":text-is('Using')")

})

test.beforeEach('locating the web elements on angular app ',async ({page})=>{

    await page.goto('http://localhost:4200/pages/iot-dashboard')

    await page.waitForLoadState("networkidle")

    await page.waitForSelector('[title="Forms"]')

    await page.locator('[title="Forms"]').click()

    await page.locator('.ng-tns-c140-3[ng-reflect-menu-item="[object Object]"]').click()

    await page.waitForSelector(':text("Inline form")')

    await page.locator('input[nbinput][placeholder="Jane Doe"]').fill("barada")
    // await page.waitForTimeout(5100)

  await page.locator('[placeholder="Email"][type="text"]').fill("barada@gmail.com")

  await page.waitForSelector(":text-is('Using the Grid')")

 console.log(await page.locator(':text-is("Using the Grid")').textContent())
  
})

test("user facing locator ",async({page})=>{


    await page.getByRole('textbox',{name: 'Email'}).nth(1).fill("barada@yahoo.com")

    await page.getByRole('button',{name: "SIGN IN"}).first().click()

    await page.getByLabel('Email').first().click()

    await page.getByPlaceholder("Password").first().click()

    await page.getByText("Using the Grid").click()

    // await page.getByTitle('IoT Dashboard').click()
   
})

test("locating child elements", async ({page})=>{

    await page.waitForTimeout(5000)
    await page.locator('nb-card nb-radio :text-is("Option 1")').check() 
    await page.locator('nb-card').locator('nb-radio').locator(":text-is('Option 2')").check()


    await page.locator('nb-card').getByRole('button',{name: "Sign In"}).first().click()

    await page.locator('nb-card').nth(4).getByRole('button',{name:"SUBMIT"}).click()
    await page.pause()

})

test.only("using parent elements", async({page})=>{

    await page.locator('nb-card',{hasText:"Using the Grid"}).getByRole('textbox',{name:"Email"}).click()
    await page.locator('nb-card',{has: page.locator('#inputEmail')}).click()

    await page.locator('nb-card').filter({hasText:"Basic Form"}).click()
    await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox',{name:"Password"}).click()

    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: "SIGN IN"}).getByRole('textbox',{name:"Email"}).click()

})