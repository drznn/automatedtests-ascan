import { Page } from '@playwright/test'

export const addCustomerLocators = {
    main: {
        firstName: "//input[@placeholder='First Name']",
        lastName: "//input[@placeholder='Last Name']",
        postCode: "//input[@placeholder='Post Code']",
        addCustomerBtn: "//button[@type='submit']"
    },
}

export class AddCustomerPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

}