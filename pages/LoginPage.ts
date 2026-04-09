import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async invalidPassword(){
    await expect(this.page.locator('[data-test="error"]')).toContainText('Username and password do not match');
  }
}
