// @ts-check
const { devices } = require('@playwright/test');

module.exports = {
  testDir: './tests',

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    viewport: { width: 1280, height: 720 }
  },

  outputDir: 'test-results/',

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
};
