import { test, expect } from '@playwright/test';

test('Article detail page should have cyberpunk design', async ({ page }) => {
  test.setTimeout(60000); // 60 second timeout
  await page.goto('http://localhost:3000/blog/create-web-roulette');

  // Wait for the page to load
  await page.waitForSelector('h1');

  // Check for glitch effect on the title
  const title = page.locator('h1');
  await expect(title).toHaveClass(/glitch-effect/);

  // Check for scanlines and noise overlay
  const article = page.locator('article');
  await expect(article).toHaveClass(/scanlines-overlay/);
  await expect(article).toHaveClass(/noise-overlay/);

  // Check for the back to blog button
  const backButton = page.getByRole('link', { name: 'Back to Blog' });
  await expect(backButton).toBeVisible();

  await page.screenshot({ path: 'article-detail-page.png' });
});
