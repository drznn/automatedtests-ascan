import { Page } from '@playwright/test'

export const customerLocators = {
    main: {},
}

export class CustomerPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

}