import { test, expect } from "playwright/test";
import { HomePage } from '../pages/homePage';
import { CustomerPage } from "../pages/customerPage";
import { customerLocators } from "../pages/customerPage";
import { accountLocators } from "../pages/accountPage";


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
    const homePage = new HomePage(page);
    const customerPage = new CustomerPage(page);

    //Act
    await customerPage.cadastrarCustomer(page, firstname, lastname, postcode);
    await homePage.navigateToHomePage(page);
    await homePage.navigateToCustomerPage(page);
    await page.locator(customerLocators.main.selectUser).selectOption(`${firstname} ${lastname}`);
    await page.locator(customerLocators.main.loginUserButton).click();
    
    //Assert
    await expect (page.locator(accountLocators.main.userAccountName)).toHaveText(`${firstname} ${lastname}`);

    //Método Wait feito Somente para visualização na apresentação
    await page.waitForTimeout(2000);
  });

  