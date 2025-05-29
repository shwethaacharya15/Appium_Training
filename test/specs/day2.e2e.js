describe('Dropdown, Checkbox, and Radio Button Tests', () => {
    it('should interact with dropdowns, checkboxes, and radio buttons', async () => {

        await browser.url('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');

        // Dropdowns 
        const dropdown1 = await $('#dropdowm-menu-1');
        await dropdown1.selectByVisibleText('Python');

        const dropdown2 = await $('#dropdowm-menu-2');
        await dropdown2.selectByVisibleText('Maven');

        const dropdown3 = await $('#dropdowm-menu-3');
        await dropdown3.selectByVisibleText('JQuery');

        //Checkboxes
        const checkbox1 = await $('input[value="option-1"]');
        const checkbox2 = await $('input[value="option-2"]');
        const checkbox3 = await $('input[value="option-3"]');

        if (!await checkbox1.isSelected()) {
            await checkbox1.click();
        }

        if (await checkbox2.isSelected()) {
            await checkbox2.click(); // Uncheck if already checked
        }

        if (!await checkbox3.isSelected()) {
            await checkbox3.click();
        }

        // Radio Buttons
        const radioGreen = await $('input[value="green"]');
        await radioGreen.click();

        await browser.pause(3000); // optional pause to observe
    });
});
