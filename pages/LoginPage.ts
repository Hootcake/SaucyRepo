import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  
  constructor(private page: Page) {
     this.username = page.locator('#user-name');
     this.password = page.locator('#password');
     this.loginButton = page.locator('#login-button');
     this.errorMessage = page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string | null>{
    return this.errorMessage.textContent();
  }
}

