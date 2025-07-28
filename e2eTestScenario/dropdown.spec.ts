import test from '@playwright/test'

test('drop down',async ({page})=>{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")

    await page.waitForLoadState('networkidle')
    // await page.locator('#state').click()
    await page.waitForTimeout(3000)
    // await page.locator('#',{hasText:"Uttar Pradesh"}).first().click()

    // await page.selectOption('#state',{label: "Uttar Pradesh"})

    //   await page.waitForTimeout(3000)
    // await page.selectOption('#state',{value: "Haryana"})
    //  await page.waitForTimeout(3000)


    //  await page.selectOption('#state',{index: 4})

    let s=  page.locator('#state')
    await s.click()

    await page.waitForTimeout(2000)
    //  await s.locator('option').last().waitFor({ state: 'visible'})
     await s.locator('option',{hasText: "Rajasthan"}).click()
    await page.pause()
})

test('dropdown without selectOption', async ({ page }) => {
  await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");

  // Click the select element to open it (may not visibly open in headless mode)
//   const dropdown = page.locator('#state');
//   await dropdown.click();

//   // Click the option with desired text
//   await dropdown.locator('option', { hasText: 'Rajasthan' }).click();

await page.waitForTimeout(2000)


   await page.evaluate(()=>{

    

  const dropdown = document.querySelector('#state') as HTMLSelectElement;
  dropdown.value = 'Haryana';
  dropdown.dispatchEvent(new Event('change', { bubbles: true }));
});

   
  await page.pause();
});

