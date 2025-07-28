import test from '@playwright/test'

test.only("drag and drop operations", async({page})=>{

     await page.goto('https://demoqa.com/droppable');

     const drag= page.locator("#draggable")
     const drop = page.locator('#droppable')

     await drag.dragTo(drop);

     await page.pause()
})