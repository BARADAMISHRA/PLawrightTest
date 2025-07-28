// import test from '@playwright/test'

// test.only("test",async ({page})=>{

//     // await page.goto('')
//     await page.goto('https://help.orangehrm.com/web/index.php/dashboard/index')

//     await page.waitForLoadState('networkidle')

//     const headers= await page.locator('#user-nav a');
//     const headersCount= await page.locator('#user-nav a').count()
// let dashboardFound=false;
//     for(let j=0;j<headersCount-1;j++){

//          const href = await headers.nth(j).getAttribute("href");
//         if(!href.toLowerCase().includes("dashboard")){
//             dashboardFound=false;
//             break;
//         }
//     }

//     let currentUrl=page.url
//     if(currentUrl.toString().toLowerCase().includes('dashobard')){
//         dashboardFound=true;
//         console.log("dashboard selected as")
//     }else{
//         dashboardFound=false;
//     }

    

// })

