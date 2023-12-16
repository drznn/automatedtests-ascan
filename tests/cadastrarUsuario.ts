import { test, expect } from "playwright/test";
import { HomePage, homeLocators } from "../pages/homePage";
import { ManagerPage } from "../pages/managerPage";

test.beforeEach(async ({ page }) => {
    const url = 'https://www.way2automation.com/angularjs-protractor/banking/#/login';
    await page.goto(url);
});

test.afterAll(async ({ page }) => {
    await page.close();
});

test('Cadastrar Usuario', async ({ page }) => {
    


  

  });