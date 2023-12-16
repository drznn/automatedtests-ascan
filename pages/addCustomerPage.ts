import { Page } from '@playwright/test'

export const addCustomerLocators = {
    main: {},
}

export class AddCustomerPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

}