import { test, expect } from "playwright/test";
import { HomePage } from '../pages/homePage';
import { addCustomerLocators } from "../pages/addCustomerPage";
import { ManagerPage } from "../pages/managerPage";


test.beforeEach(async ({ page }) => {
    const url = 'https://www.way2automation.com/angularjs-protractor/banking/#/login';
    await page.goto(url);
});

test.afterAll(async ({ page }) => {
    // await page.close();
});

test('Cadastrar Novo Usuario', async ({ page }) => {
    //Arrange
    const firstname = 'Andre';
    const lastname = 'Albuquerque';
    const postcode = '61800-000';
    const homePage = new HomePage(page);
    const managerPage = new ManagerPage(page);

    //Act
    await homePage.navigateToAddCustomerPage(page);
    await managerPage.fillCustomerData(page,firstname,lastname,postcode);
    await page.locator(addCustomerLocators.main.addCustomerBtn).click();
    await page.locator(addCustomerLocators.main.customersButton).click();

    //Assert
    await expect (page.locator(`//td[normalize-space()='${firstname}']`)
     && page.locator(`//td[normalize-space()='${lastname}']`)
     && page.locator(`//td[normalize-space()='${postcode}']`)).toBeVisible();

  });

  