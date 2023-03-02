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

  test('should display error message for invalid login', async () => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.fill('#username', 'invalid');
    await page.fill('#password', 'password');
    await page.click('#loginButton');
    await expect(page).toHaveText('#loginPanel > .error', 'Error: Invalid username and/or password');
  });
});
