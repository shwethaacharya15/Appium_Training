class DropdownCheckboxRadioPage {
    async open() {
        await browser.url('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/');
    }

    async selectDropdowns(value1, value2, value3) {
        await $('#dropdowm-menu-1').selectByVisibleText(value1);
        await $('#dropdowm-menu-2').selectByVisibleText(value2);
        await $('#dropdowm-menu-3').selectByVisibleText(value3);
    }

    async handleCheckboxes(opt1, opt2, opt3) {
        const checkbox1 = await $(`input[value="${opt1}"]`);
        const checkbox2 = await $(`input[value="${opt2}"]`);
        const checkbox3 = await $(`input[value="${opt3}"]`);

        if (!await checkbox1.isSelected()) await checkbox1.click();
        if (await checkbox2.isSelected()) await checkbox2.click();
        if (!await checkbox3.isSelected()) await checkbox3.click();
    }

    async selectRadio(color) {
        const radio = await $(`input[value="${color}"]`);
        await radio.click();
    }
}

export default new DropdownCheckboxRadioPage();
