const { test,expect,chromium } = require('@playwright/test');
const {browser} = require('playwright-core')


test.describe('Login Page', () => {
  let browser;
  let context;
  let page;

  test.beforeEach(async ({page}) => {
     browser = await chromium.launch();
     context  = await browser.newContext();
     page = await context.newPage();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  // test.afterAll(async () => {
  //   await browserContext.close();
  // });

  test('should display error message for invalid login', async ({page}) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    // const login = page.get
    await page.locator('input[name="username"]').fill('nothing');
    await page.locator('input[name="password"]').fill('password');
    await page.getByRole('button',{name:'Log In'}).click();
    await expect(page.getByText('The username and password could not be verified.')).toBeVisible();
  });
});
