import { Page } from '@playwright/test'

export const accountLocators = {
    main: {
        userAccountName: "//span[@class='fontBig ng-binding']"
    },
}

export class AccountPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

}