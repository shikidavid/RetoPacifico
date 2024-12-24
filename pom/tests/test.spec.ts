import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { EmployeesPage } from '../pages/employees.page';

test('Login correcto', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await loginPage.submitLoginForm('Admin', 'admin123');
  await page.waitForTimeout(3000);

});

test('Login con usuario incorrecto', async ({ page }) => {
      
  const loginPage = new LoginPage(page);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await loginPage.submitLoginForm('user', 'admin123');
  await loginPage.verifyErrorMessage('Invalid credentials');
  await page.waitForTimeout(3000);
});

test('Login con contraseña incorrecta', async ({ page }) => {
      
  const loginPage = new LoginPage(page);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await loginPage.submitLoginForm('Admin', '123456');
  await loginPage.verifyErrorMessage('Invalid credentials');
  await page.waitForTimeout(3000);
});

test('Registrar Empleado', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const employeesPage = new EmployeesPage(page);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await loginPage.submitLoginForm('Admin', 'admin123');
  
  await employeesPage.registerEmployee('nombre1','nombre2','nombre3','User25','Password123','Password123');
  
  await page.waitForTimeout(3000);
  await employeesPage.verifyCreateMessage('Personal Details'); 

  await page.waitForTimeout(3000);

});