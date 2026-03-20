const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }, // iPhone SE dimensions
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
  });
  const page = await context.newPage();
  await page.goto('http://localhost:5173');
  // Scroll down a bit to activeStep 1 where Earth shows
  await page.evaluate(() => window.scrollBy(0, 1000));
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/mobile_hero.png' });
  
  await page.evaluate(() => window.scrollBy(0, 500));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/mobile_hero_2.png' });

  await browser.close();
})();
