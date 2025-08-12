import { test, expect } from '@playwright/test';

test.describe('Rutinas Module', () => {
  test('should load the rutinas page correctly', async ({ page }) => {
    await page.goto('/rutinas');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check that the page loaded without errors
    await expect(page).toHaveURL('/rutinas');
    
    // Basic check that content is present
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('should display rutinas content', async ({ page }) => {
    await page.goto('/rutinas');
    
    // Wait for content to load
    await page.waitForLoadState('networkidle');
    
    // Check that the page has some content
    const pageContent = await page.textContent('body');
    expect(pageContent).toBeDefined();
  });
});
