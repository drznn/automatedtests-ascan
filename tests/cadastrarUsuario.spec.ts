import { test, expect } from "playwright/test";
import { homeLocators } from "../pages/homePage";
import { manageLocators } from "../pages/managerPage";
import { addCustomerLocators } from "../pages/addCustomerPage";



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
    const postcode = '61800000'

    await page.locator(homeLocators.main.bankManager).click();
    await page.locator(manageLocators.main.addCustomer).click();
    await page.locator(addCustomerLocators.main.firstName).type(firstname, {delay:100});
    await page.locator(addCustomerLocators.main.lastName).type(lastname, {delay:100});
    await page.locator(addCustomerLocators.main.postCode).type(postcode, {delay:100});
    await page.locator(addCustomerLocators.main.addCustomerBtn).click();
   
    await page.goto('https://www.way2automation.com/angularjs-protractor/banking/#/manager/list');


    await expect (page.locator("//td[normalize-space()='Andre']")).toBeVisible();
  });