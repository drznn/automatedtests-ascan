import { Page } from '@playwright/test'

export const homeLocators = {
    main: {
        customer : "//button[normalize-space()='Customer Login']",
        bankManager : "//button[normalize-space()='Bank Manager Login']",
        home : "//button[@class='btn home']",
    },
}

export class HomePage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }


}