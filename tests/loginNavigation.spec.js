const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('Navigate to OrangeHRM Login Page and verify UI elements', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Step 1: Navigate to page
  await loginPage.goto();

  // Step 2: Verify page URL contains expected domain
  await expect(page).toHaveURL(/orangehrmlive/);

  // Step 3: Verify Title
  await expect(page).toHaveTitle(/OrangeHRM/); // positive > pass case

// await expect(page).toHaveTitle(/Google/); // negative > fail case

// Step 4: Enter the username 
// await page.locator('//input[@name="username"]').fill('Admin')

await loginPage.enterUsername('Admin')

// Step 5: Enter the password 
await page.locator('//input[@name="password"]').fill('admin123')

// Step 6: Click on the login button 
await page.locator('//button[@type="submit"]').click()

// Step 7: Verify the Dashboard text after login success
const headerElement = await page.locator('//h6[text()="Dashboard"]')

await expect(headerElement).toBeVisible()
// await expect(headerElement).toHaveText('Dashboard') // pass scenario 

await expect(headerElement).toHaveText('Home') // fail scenario 




});
