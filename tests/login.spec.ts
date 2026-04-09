import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test.describe('Login Page tests', () =>{
  test('Successful Login', async ({page}) =>{
    const loginPage = new LoginPage(page); 
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  })

  test('Unsuccessful Login (Invalid Password)', async ({page}) =>{
    const loginPage = new LoginPage(page); 
    await loginPage.goto();
    await loginPage.login('standard_user', 'bad_pass');
    await loginPage.invalidPassword();
  })
});