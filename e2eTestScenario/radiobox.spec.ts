import test from '@playwright/test'

test.only("doing check box opeartion",async({page})=>{

    await page.goto('https://www.facebook.com/r.php?entry_point=login')

    // await page.waitForTimeout(8000)cls

    await page.waitForLoadState('networkidle')

    await page.getByLabel('Male',{exact: true}).check()
   const checked= await page.getByLabel('Male',{exact: true}).isChecked()


   console.log(checked)

   if(checked==true){
 await page.getByLabel('Female',{exact: true}).check()
   }
   const unchecked= await page.getByLabel('Male',{exact: true}).isChecked()


   console.log(unchecked)

  await page.pause()

})