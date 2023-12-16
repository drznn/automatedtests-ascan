import { Page } from '@playwright/test'

export const accountLocators = {
    main: {},
}

export class AccountPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

}