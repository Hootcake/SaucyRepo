import { Page, Locator } from '@playwright/test';

export class CartPage{

    readonly itemPrice: Locator;
    readonly continueShoppingButton: Locator; 
    readonly checkoutButton: Locator;
    readonly removeButton: Locator;
    constructor(private page: Page){
        this.itemPrice = page.locator('[data-test="inventory-item-price"]');
        this.continueShoppingButton = page.getByRole('button', {name: 'Continue Shopping'});
        this.checkoutButton = page.getByRole('button', {name: 'Checkout'});
        this.removeButton = page.getByRole('button', {name: 'Remove'});
    }

    async clickContinueShoppingButton(){
        await this.continueShoppingButton.click();
    }

    async clickCheckoutButton(){
        await this.checkoutButton.click();
    }

    async clickRemoveButton(){
        await this.removeButton.click();
    }
}