import { Page } from '@playwright/test'
import { HomePage } from '../pages/homePage';
import { addCustomerLocators } from "../pages/addCustomerPage";
import { ManagerPage } from "../pages/managerPage";

export const customerLocators = {
    main: {
        customerLoginButton: "//button[normalize-space()='Customer Login']",
        selectUser: "#userSelect",
        loginUserButton: "//button[normalize-space()='Login']",
    },
}

export class CustomerPage {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async cadastrarCustomer(page: Page ,firstName: string, lastName: string, postCode: string): Promise<void> {
    const homePage = new HomePage(page);
    const managerPage = new ManagerPage(page);
    
    await homePage.navigateToAddCustomerPage(page);
    await managerPage.fillCustomerData(page,firstName,lastName,postCode);
    await page.locator(addCustomerLocators.main.addCustomerBtn).click();
    await managerPage.navigateToCustomersList(page);
    }
}