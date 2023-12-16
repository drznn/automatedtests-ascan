import { test, expect } from "playwright/test";
import { HomePage } from '../pages/homePage';
import { addCustomerLocators } from "../pages/addCustomerPage";
import { ManagerPage } from "../pages/managerPage";



test.beforeEach(async ({ page }) => {
    const url = 'https://www.way2automation.com/angularjs-protractor/banking/#/login';
    await page.goto(url);
});

test.afterAll(async ({ page }) => {
    await page.close();
});

test('Cadastrar Usuario', async ({ page }) => {
    const firstname = 'Andre';
    const lastname = 'Albuquerque';
    const postcode = '61800000';

    const homePage = new HomePage(page);
    await homePage.navigateToAddCustomerPage(page);

    const managerPage = new ManagerPage(page);
    await managerPage.fillCustomerData(page,firstname,lastname,postcode);
    
    await page.locator(addCustomerLocators.main.addCustomerBtn).click();
   
    await managerPage.navigateToCustomersList(page);

    await expect (page.locator(`//td[normalize-space()='${firstname}']`)
     && page.locator(`//td[normalize-space()='${lastname}']`)
     && page.locator(`//td[normalize-space()='${postcode}']`)).toBeVisible();

     await page.waitForTimeout(5000);
  });