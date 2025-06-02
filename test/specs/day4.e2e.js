const { expect } = require('chai');

describe('Bootstrap Toast Message Test', () => {
  it('should scroll to and trigger the toast message', async () => {
    await browser.url('https://getbootstrap.com/docs/5.0/components/toasts/');
    const toastBtn = await $('#liveToastBtn');
    await toastBtn.scrollIntoView();
    await toastBtn.click();

    const toast = await $('#liveToast');
    await toast.waitForDisplayed({ timeout: 3000 });

    const toastText = await toast.getText();
    console.log('Toast Message:', toastText);

    expect(toastText).to.include('Hello, world! This is a toast message.');
  });
});
