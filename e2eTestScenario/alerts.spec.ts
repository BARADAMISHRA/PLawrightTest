import { test, expect } from '@playwright/test';

test('handle JS alert properly', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // ✅ Listen for alert before triggering it
  page.on('dialog', async dialog => {
    console.log('Alert says:', dialog.message()); // Print alert message
    await dialog.accept();                        // Accept the alert
  });

  // 🔘 Trigger the alert
  await page.click('text=Click for JS Confirm');

  await page.waitForTimeout(9000); // (Optional) to observe effect

  await page.pause()
});
