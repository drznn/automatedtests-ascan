import { Page } from '@playwright/test'

export const customerListLocators = {
    main: {},
}

export class CustomerListPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

}