import { chromium } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, 'auth.json');

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://practicetestautomation.com/practice-test-login/");

  await page.locator('#username').fill("student");
  await page.locator("#password").fill("Password123");
  await page.locator("#submit").click();

  await page.locator('.has-text-align-center strong').waitFor({ state: 'visible' });

  console.log(await page.locator('.has-text-align-center strong').textContent());

  await context.storageState({ path: authFile });

  await browser.close();
}

export default globalSetup;
