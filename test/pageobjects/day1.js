class DemoPage {
    get firstName() { return $('#Form_getForm_FullName'); }
    get phoneNumber() { return $('#Form_getForm_Contact'); }
    get email() { return $('#Form_getForm_Email'); }
    get companyName() { return $('#Form_getForm_CompanyName'); }
    get countryDropdown() { return $('.dropdown'); }
    get countryOption() { return $('//option[@value="Afghanistan"]'); }
    get employeesDropdown() { return $('#Form_getForm_NoOfEmployees'); }
    get employeesOption() { return $('option[value="10-50"]'); }
    get recaptchaCheckbox() { return $('.recaptcha-checkbox-border'); }
    get demoButton() { return $('#Form_getForm_action_submitForm'); }

    async open() {
        await browser.setTimeout({ pageLoad: 120000 });
        await browser.url('https://www.orangehrm.com/en/book-a-free-demo');
    }

    async fillForm({ name, phone, email, company }) {
        await this.firstName.setValue(name);
        await this.phoneNumber.setValue(phone);
        await this.email.setValue(email);
        await this.companyName.setValue(company);

        // Assertion for placeholder
        await expect(this.companyName).toHaveAttribute('placeholder', 'Company Name');

        await this.countryDropdown.click();
        await this.countryOption.click();

        await this.employeesDropdown.click();
        await this.employeesOption.click();

        await this.demoButton.click();
    }
}
module.exports = new DemoPage();
