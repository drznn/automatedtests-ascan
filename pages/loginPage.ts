import { Page } from '@playwright/test'

export const loginLocators = {
    main: {},
}

export class LoginPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

}