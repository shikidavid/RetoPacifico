const { expect } = require('@playwright/test');

exports.EmployeesPage = class EmployeesPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.menuEmployees = page.getByRole('link', { name: 'PIM' });
    this.AddButton = page.locator('button', { hasText: 'Add' });
    this.FirstName = page.locator('input[placeholder="First Name"]');
    this.MiddleName = page.locator('input[placeholder="Middle Name"]');
    this.LastName = page.locator('input[placeholder="Last Name"]');
    this.SwitchLogin = page.locator('span[class="oxd-switch-input oxd-switch-input--active --label-right"]');
    this.UserName = page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input')
    this.Password = page.locator('input[type="password"]')
    this.ConfirmPassword = page.locator('input[type="password"]')
    this.SaveButton = page.locator('button[type="submit"]');
    this.PersonalDetails = page.getByRole('link', { name: 'Personal Details' })
  }

  async registerEmployee(firstname, middlename, lastname, username, password, confirm) {
    await this.menuEmployees.click();
    await this.AddButton.click();
    await this.FirstName.fill(firstname);
    await this.MiddleName.fill(middlename);
    await this.LastName.fill(lastname);
    await this.SwitchLogin.click();
    await this.UserName.click();
    await this.UserName.fill(username);
    await this.Password.first().click();
    await this.Password.first().fill(password);
    await this.ConfirmPassword.nth(1).click();
    await this.ConfirmPassword.nth(1).fill(confirm);
    await this.SaveButton.click();

  }

  async verifyCreateMessage(expectedMessage) {
    await expect(this.PersonalDetails).toHaveText(expectedMessage);
  }
};