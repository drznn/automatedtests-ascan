import { Page } from '@playwright/test'
import { HomePage } from '../pages/homePage';
import { ManagerPage } from "../pages/managerPage";

export const addCustomerLocators = {
    main: {
        firstName: "//input[@placeholder='First Name']",
        lastName: "//input[@placeholder='Last Name']",
        postCode: "//input[@placeholder='Post Code']",
        addCustomerBtn: "//button[@type='submit']",
        customersButton: "//button[normalize-space()='Customers']"
    },
}

export class AddCustomerPage {
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