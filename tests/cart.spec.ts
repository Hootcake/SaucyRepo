import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Page tests', () =>{

    //Again, needs a rewrite when we get more comfortable with beforeEach 
    test('Verify item is in cart (Price = 29.99)', async({page}) =>{
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        //Login successfully
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page, "Successful Login, user should be taken to Inventory Page").toHaveURL('https://www.saucedemo.com/inventory.html');
        
        //Add an item
        await inventoryPage.addSingularItemToCart();
        
        //Go to cart 
        await inventoryPage.clickCartButton();
        await expect(page, "Clicked Cart Icon, user should be taken to Cart Page").toHaveURL('https://www.saucedemo.com/cart.html')

        await expect(cartPage.itemPrice).toHaveText('$29.99');
    })


    //
    test('Move to Checkout', async({page}) =>{
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        
        //Login successfully
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page, "Successful Login, user should be taken to Inventory Page").toHaveURL('https://www.saucedemo.com/inventory.html');
        
        //Add an item
        await inventoryPage.addSingularItemToCart();

        //Go to cart
        await inventoryPage.clickCartButton();
        await expect(page, "Clicked Cart Icon, user should be taken to Cart Page").toHaveURL('https://www.saucedemo.com/cart.html')

        await cartPage.clickCheckoutButton();
        await expect(page, "Clicked Checkout").toHaveURL('https://www.saucedemo.com/checkout-step-one.html')

    })
});