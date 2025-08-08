import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  
  testDir: './e2eTestScenario',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only */
  // retries: 1,
  /* Opt out of parallel tests on CI. */
   workers: 4,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
 reporter: [
    ['line'],
    ['junit', { outputFile: 'playwright-report/results.xml' }],
    ['html', { open: 'never', outputFolder: 'playwright-report' }]
  ],
  timeout:30*1000,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    storageState: 'auth.json',
    baseURL: 'https://practicetestautomation.com/practice-test-login/'
  },
globalSetup: "./login.spec.ts",
globalTeardown: "./globalteardown.spec.ts",
// globalSetup: './global-setup.ts',


  /* Configure projects for major browsers */
  projects: [
    {
      name: "chrome",
      use: { browserName: 'chromium' }
    },

    {
      name: 'firefox',
      use: {'browserName': 'firefox' },
    },

    {
      name: 'webkit',
      use: { 'browserName': 'webkit' },
    },

    
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
