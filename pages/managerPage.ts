import { Page } from '@playwright/test'

export const manageLocators = {
    main: {},
}

export class ManagePage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

}