describe('Handling Iframe in WebDriverIO (Appium Web Context)', () => {

  it('Approach 1 - Switch to iframe and click', async () => {
    await browser.url('https://rahulshettyacademy.com/AutomationPractice/');

    // Switch to iframe by ID
    const iframe = await $('#courses-iframe');
    await browser.switchToFrame(iframe);

    // Interact inside iframe
    const mentorshipLink = await $('a[href="mentorship"]');
    await mentorshipLink.click();

    const dropdownToggle = await $('a.dropdown-toggle');
    await dropdownToggle.moveTo();
    await dropdownToggle.click();
    
    // Switch back to main page
    await browser.switchToParentFrame();
  });

  it('Approach 2 - Store iframe in a variable', async () => {
    await browser.url('https://rahulshettyacademy.com/AutomationPractice/');

    const iframe = await $('#courses-iframe');
    await browser.switchToFrame(iframe);

    const mentorshipLink = await $('a[href="mentorship"]');
    await mentorshipLink.click();

    const dropdown = await $('a.dropdown-toggle');
    await dropdown.moveTo();
    await dropdown.click();

    await browser.switchToParentFrame();
  });

 

});
