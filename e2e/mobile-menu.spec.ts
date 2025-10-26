import { test, expect } from '@playwright/test';

test('Mobile menu scroll lock test', async ({ page }) => {
  test.setTimeout(60000); // 60 second timeout
  await page.goto('http://localhost:3000');
  await page.setViewportSize({ width: 375, height: 667 }); // iPhone 8 viewport

  // Open mobile menu
  await page.getByLabel('メニューを開く').click();

  // More specific locator for the mobile menu link
  const mobileMenuLink = page.locator('div[class*="md:hidden"]').getByRole('link', { name: 'トップ //' });
  await expect(mobileMenuLink).toBeVisible();

  // Check if body has the no-scroll class
  const bodyHandle = await page.$('body');
  const bodyClass = await bodyHandle?.getAttribute('class');
  expect(bodyClass).toContain('body-no-scroll');

  await page.screenshot({ path: 'mobile-menu-open.png' });

  // Close mobile menu
  await page.getByLabel('メニューを閉じる').click();

  // Check if body does not have the no-scroll class
  const bodyClassAfterClose = await bodyHandle?.getAttribute('class');
  expect(bodyClassAfterClose).not.toContain('body-no-scroll');
});
