import { test, expect } from "playwright/test";
import { HomePage, homeLocators } from '../pages/homePage';
import { CustomerPage } from "../pages/customerPage";
import { customerLocators } from "../pages/customerPage";
import { accountLocators } from "../pages/accountPage";
import { AddCustomerPage, addCustomerLocators } from "../pages/addCustomerPage";
import { ManagerPage } from "../pages/managerPage";


test.beforeEach(async ({ page }) => {
    const url = 'https://www.way2automation.com/angularjs-protractor/banking/#/login';
    await page.goto(url);
});

test.afterAll(async ({ page }) => {
    await page.close();
});

test('Login de Usuário Cadastrado', async ({ page }) => {
    //Arrange
    const firstname = 'Andre';
    const lastname = 'Albuquerque';
    const postcode = '61800-000';
    const addCustomerPage = new AddCustomerPage(page);

    //Act
    await addCustomerPage.cadastrarCustomer(page,firstname,lastname,postcode);
    await page.locator(homeLocators.main.home).click();
    await page.locator(customerLocators.main.customerLoginButton).click();
    await page.locator(customerLocators.main.selectUser).selectOption(`${firstname} ${lastname}`);
    await page.locator(customerLocators.main.loginUserButton).click();
    
    //Assert
    await expect (page.locator(accountLocators.main.userAccountName)).toHaveText(`${firstname} ${lastname}`);

    //Método Wait feito Somente para visualização na apresentação
    await page.waitForTimeout(2000);
  });
