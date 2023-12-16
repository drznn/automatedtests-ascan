import { Page } from '@playwright/test'
import { manageLocators } from "../pages/managerPage";

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

}