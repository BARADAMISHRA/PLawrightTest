
import test from '@playwright/test'
import { parseEnv } from 'util'

test.only("text box operation",async ({page})=>{

    await page.goto("https://www.google.com")

    await page.waitForLoadState('networkidle')

    let searchText=page.locator('[title="Search"]')
    await page.waitForSelector('[title="Search"]')

    // await searchText.fill("Testing course");

    await searchText.pressSequentially("Testing course",{delay: 100})

    let enteredSearchValue=await searchText.inputValue()

    console.log(enteredSearchValue)

 const suggestions=   page.locator('ul[role="listbox"] li .wM6W7d')

    const suggestionText=await suggestions.allTextContents()
console.log(suggestionText+"-- all text is ")
   const suggestionCount=await suggestions.count()

   console.log(suggestionCount)

//    console.log("---------------------")
//    for(let i=0;i<suggestionCount;i++){

//    let te= await suggestions.nth(i).textContent()
//     console.log(" displayed text is "+te)

//     if(te==='testing course syllabus'){
//         await suggestions.nth(i).click()
//         break
//     }
//    }

//    await page.waitForTimeout(18000)
//    console.log("---------------------")

console.log(suggestionText)

//  await page.locator('ul[role="listbox"] li .wM6W7d',{hasText: "testing course in hyderabad"}).click()

await page.locator('ul[role="listbox"] li .wM6W7d',{hasText: 'testing course in hyderabad'}).click()
  await  page.pause()
    // await searchText.clear()




})