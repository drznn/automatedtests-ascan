import { Page } from '@playwright/test'

export const manageLocators = {
    main: {
        addCustomer : "//button[normalize-space()='Add Customer']",
        openAccount : "//button[normalize-space()='Open Account']",
        customers : "//button[normalize-space()='Customers']"
    },
}

export class ManagerPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }
}