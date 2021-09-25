import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://news.ycombinator.com');
  await page.screenshot({ path: "foo.png" })
});
