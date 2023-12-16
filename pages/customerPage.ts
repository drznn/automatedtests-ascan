import { Page } from '@playwright/test'

export const customerLocators = {
    main: {},
}

export class customerPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

}