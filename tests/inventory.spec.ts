import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Inventory Page tests', () =>{
  test('Add and Remove item', async ({page}) =>{
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await inventoryPage.addItem();
  })

});