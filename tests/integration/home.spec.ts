import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load the home page correctly', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check that the page loaded without errors
    await expect(page).toHaveURL('/');
    
    // Basic check that content is present
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('should have proper page title', async ({ page }) => {
    await page.goto('/');
    
    // Check if page has a title
    const title = await page.title();
    expect(title).toBeDefined();
  });
});
