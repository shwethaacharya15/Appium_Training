import demoPage from '../pageobjects/day1';
import demoData from '../../fixtures/day1.json';

describe('Login to the website', () => {
    it('should submit the demo form with valid data from fixture', async () => {
        console.log('Navigating to demo page...');
        await demoPage.open();
        console.log('Navigation complete');

        await demoPage.fillForm(demoData.validDemo);
    });
});
