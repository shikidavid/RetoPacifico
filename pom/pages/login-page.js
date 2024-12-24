const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.user = page.locator('input[placeholder="Username"]');
    this.pass = page.locator('input[placeholder="Password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.oxd-alert-content-text');
  }

  async submitLoginForm(user,pass) {
    await this.user.fill(user);
    await this.pass.fill(pass);
    await this.loginButton.click();
  }

  async verifyErrorMessage(expectedMessage) {
    await expect(this.errorMessage).toHaveText(expectedMessage);
  }

};