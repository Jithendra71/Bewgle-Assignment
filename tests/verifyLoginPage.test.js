const { chromium } = require('playwright');

describe('Login Page', () => {
  let browser;
  let context;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should display login page', async () => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await expect(page).toHaveText('h1', 'Customer Login');
    await expect(page).toHaveSelector('#loginPanel');
    await expect(page).toHaveSelector('#username');
    await expect(page).toHaveSelector('#password');
    await expect(page).toHaveSelector('#loginButton');
  });
});
