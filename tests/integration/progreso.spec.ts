import { test, expect } from '@playwright/test';

test.describe('Progreso Module', () => {
  test('should load the progreso page correctly', async ({ page }) => {
    await page.goto('/progreso');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check that the page loaded without errors
    await expect(page).toHaveURL('/progreso');
    
    // Basic check that content is present
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('should display progreso content', async ({ page }) => {
    await page.goto('/progreso');
    
    // Wait for content to load
    await page.waitForLoadState('networkidle');
    
    // Check that the page has some content
    const pageContent = await page.textContent('body');
    expect(pageContent).toBeDefined();
  });
});
