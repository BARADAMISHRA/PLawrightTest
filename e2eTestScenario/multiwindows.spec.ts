import test from '@playwright/test'

test.only("multiple windows", async({page,context})=>{
  await page.goto("https://demoqa.com/browser-windows")

   const allPages= context.pages()

   console.log(allPages.length)

   for(let i=0;i<allPages.length;i++){
    console.log()
   console.log(await allPages[i].title())
    await allPages[i].close()
   }
} )