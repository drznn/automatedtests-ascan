import { Page } from '@playwright/test'
import { addCustomerLocators } from "../pages/addCustomerPage";

export const manageLocators = {
    main: {
        addCustomer: "//button[normalize-space()='Add Customer']",
        openAccount: "//button[normalize-space()='Open Account']",
        customers: "//button[normalize-space()='Customers']"
    },
}

export class ManagerPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillCustomerData(page: Page, firstName: string, lastName: string, postCode: string): Promise<void> {

        await page.locator(addCustomerLocators.main.firstName).type(firstName, { delay: 100 });
        await page.locator(addCustomerLocators.main.lastName).type(lastName, { delay: 100 });
        await page.locator(addCustomerLocators.main.postCode).type(postCode, { delay: 100 });

    }


    async navigateToCustomersList(page: Page): Promise<void> {
        await page.goto('https://www.way2automation.com/angularjs-protractor/banking/#/manager/list');
    }

}