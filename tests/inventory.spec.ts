import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Inventory Page tests', () =>{

// This test is dependent on a successful login, so we will perform the login steps within this test case. Refactor to use beforeEach later down the line
  test('Add Item, verify cart counter', async ({page}) =>{
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page, "Successful Login, user should be taken to Inventory Page").toHaveURL('https://www.saucedemo.com/inventory.html');

    await inventoryPage.addSingularItemToCart();
    expect(await inventoryPage.getCartCount()).toBe('1');
  })

});