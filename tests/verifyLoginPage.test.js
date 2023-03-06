const { test,expect,chromium } = require('@playwright/test');


test.describe('Login Page', () => {
  let browser;
  let context;
  let page;

  test.beforeEach(async () => {
     browser = await chromium.launch();
     context  = await browser.newContext();
     page = await context.newPage();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('should display login page', async () => {
    page.goto('https://parabank.parasoft.com/parabank/index.htm')
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
    // await expect(page).
    await expect(page.getByRole('heading', { name: 'Customer Login' })).toBeVisible();
    await expect(page.getByText('Username')).toBeVisible();
    await expect(page.getByText('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();

    // await expect(page).toHaveSelector('#username');
    // await expect(page).toHaveSelector('#password');
    // await expect(page).toHaveSelector('#loginButton');
  });
});
