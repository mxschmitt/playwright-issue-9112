// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com/login?goto=news');
  await page.fill('input[name="acct"]', '......');
  await page.fill('input[name="pw"]', '......');
  await page.click('form[action=login] input[type=submit]');
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: config.projects[0].use.storageState as string });
  await browser.close();
}

export default globalSetup;