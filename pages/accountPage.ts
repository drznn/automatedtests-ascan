import { Page } from '@playwright/test'

export const accountLocators = {
    main: {},
}

export class accountPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

}