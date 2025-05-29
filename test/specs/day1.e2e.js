import { expect, browser, $ } from "@wdio/globals";
import assert from 'assert'; // native Node.js assert module 

describe('Login to the website', async() => {
    it('Get free Demo to Login to the site',  async() => {
         // await - like communicating with a browser or device
         //Without await, your code would move to the next line immediately, without waiting for the command to finish.
         //Using await pauses the execution until the command completes, ensuring steps happen in the right order.
    await browser.url('https://www.orangehrm.com/en/book-a-free-demo');

   //Find the element by xpath
    const firstName = await $('//*[@id="Form_getForm_FullName"]')
    await firstName.setValue('Shwetha')

    //Find the element by xpath
    const phoneNum = await $('//*[@id="Form_getForm_Contact"]')
    await phoneNum.setValue('56232352656')

    // Find the element by id
    const emailInput = await $('#Form_getForm_Email');
    await emailInput.setValue('shwetha@example.com');

    const companyNameInput = await $('#Form_getForm_CompanyName');
        // Get the placeholder attribute value
    // Assert the placeholder is correct
        //     expect(placeholder).toBe('Company Name');

    // //With WebdriverIO’s assert module (since you already imported it):
    // assert.strictEqual(placeholder, 'Company Name');
        await expect(companyNameInput).toHaveAttribute('placeholder', 'Company Name');

    // Find the dropdown element by class name and click it to open options
    const dropdown = await $('.dropdown');
    await dropdown.click();
    
    //select the option
    const option = await $('//option[@value="Afghanistan"]');
    await option.click();

    //select by id 
    const employeesDropdown = await $('#Form_getForm_NoOfEmployees');
    await employeesDropdown.click();
    
    // Select option by value, e.g., "10-50"
    const option2 = await $('option[value="10-50"]');
    await option2.click();

    const checkbox = await $('.recaptcha-checkbox-border');
    await checkbox.click();

    const demoButton = await $('#Form_getForm_action_submitForm');
    await demoButton.click();

    
    //Alternate (if id fails and you want to use value):

    // const demoButton = await $('//input[@value="Get a Free Demo"]');
    // await demoButton.click();

    })

})