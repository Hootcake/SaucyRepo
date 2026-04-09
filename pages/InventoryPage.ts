import { Page, Locator, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';

export class InventoryPage{
    readonly addToCartButton: Locator; 
    readonly removeButton: Locator;
    readonly cartCounter: Locator;
    constructor(private page: Page){
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.removeButton = page.getByRole('button', {name: 'Remove'});
        this.cartCounter = page.locator('[data-test="shopping-cart-badge"]');
    };

    async addItem(){
        await this.addToCartButton.click();
        await expect(this.cartCounter).toHaveText('1');
    }
}