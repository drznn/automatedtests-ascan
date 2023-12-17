import { Page } from '@playwright/test'
import { manageLocators } from "../pages/managerPage";
import { customerLocators } from "../pages/customerPage";

export const homeLocators = {
    main: {
        customer: "//button[normalize-space()='Customer Login']",
        bankManager: "//button[normalize-space()='Bank Manager Login']",
        home: "//button[@class='btn home']",
    },
}

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToAddCustomerPage(page: Page): Promise<void> {
        await page.locator(homeLocators.main.bankManager).click();
        await page.locator(manageLocators.main.addCustomer).click();
    }

    async navigateToCustomerPage(page: Page): Promise<void> {
        await page.locator(customerLocators.main.customerLoginButton).click();
    }

    async navigateToHomePage(page: Page): Promise<void> {
        const url = 'https://www.way2automation.com/angularjs-protractor/banking/#/login';
    await page.goto(url);
    }
}