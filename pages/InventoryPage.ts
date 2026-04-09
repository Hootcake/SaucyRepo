import { Page, Locator } from '@playwright/test';

export class InventoryPage{
    readonly addItemToCartButton: Locator; 
    readonly removeButton: Locator;
    readonly cartCounter: Locator;
    readonly goToCartButton: Locator; 

    constructor(private page: Page){
        this.addItemToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.removeButton = page.getByRole('button', {name: 'Remove'});
        this.cartCounter = page.locator('[data-test="shopping-cart-badge"]');
        this.goToCartButton = page.locator('[data-test="shopping-cart-link"]')
    };

    async addSingularItemToCart(){
        // Click the "Add to Cart" button for the first item
        await this.addItemToCartButton.click();
    }

    async getCartCount(): Promise<string | null>{
        return this.cartCounter.textContent();
    }

    //Not huge on this as it's shared. Lets look at a shared NavBar component later.
    async clickCartButton(){
        await this.goToCartButton.click();
    }
}