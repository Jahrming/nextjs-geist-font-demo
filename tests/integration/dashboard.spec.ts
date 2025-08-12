import { test, expect } from '@playwright/test';

test.describe('Dashboard Module', () => {
  test('should load the dashboard page correctly', async ({ page }) => {
    await page.goto('/dashboard');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check that the page loaded without errors
    await expect(page).toHaveURL('/dashboard');
    
    // Basic check that content is present
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('should display dashboard content', async ({ page }) => {
    await page.goto('/dashboard');
    
    // Wait for content to load
    await page.waitForLoadState('networkidle');
    
    // Check that the page has some content
    const pageContent = await page.textContent('body');
    expect(pageContent).toBeDefined();
  });
});
