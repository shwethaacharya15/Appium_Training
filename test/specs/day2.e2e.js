import page from '../pageobjects/day2';
import testData from '../../fixtures/day2.json';

describe('Dropdown, Checkbox, and Radio Button Tests', () => {
    it('should interact with dropdowns, checkboxes, and radio buttons', async () => {
        await page.open();

        await page.selectDropdowns(
            testData.dropdown1,
            testData.dropdown2,
            testData.dropdown3
        );

        await page.handleCheckboxes(
            testData.checkboxes.option1,
            testData.checkboxes.option2,
            testData.checkboxes.option3
        );

        await page.selectRadio(testData.radio);
        await browser.pause(3000); // optional
    });
});
