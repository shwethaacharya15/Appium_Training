describe('JS Alerts Handling', () => {
  before(async () => {
    // Launch mobile browser and viist the website
    await driver.url('https://the-internet.herokuapp.com/javascript_alerts');
  });

  it('should handle JS Alert', async () => {
    const jsAlertBtn = await $('button=Click for JS Alert');
    await jsAlertBtn.click();

    // Accept the alert
    await driver.acceptAlert();

    const result = await $('#result').getText();
    console.log('Result:', result); 
  });

  it('should handle JS Confirm - dismiss', async () => {
    const jsConfirmBtn = await $('button=Click for JS Confirm');
    await jsConfirmBtn.click();

    // Dismiss the confirm box
    await driver.dismissAlert();

    const result = await $('#result').getText();
    console.log('Result:', result); 
  });

  it('should handle JS Prompt - send text', async () => {
    const jsPromptBtn = await $('button=Click for JS Prompt');
    await jsPromptBtn.click();

    // Send text to prompt
    await driver.sendAlertText('Shwetha');

    // Accept the prompt
    await driver.acceptAlert();

    const result = await $('#result').getText();
    console.log('Result:', result); 
  });



//assertion part



  it('should validate UI elements on the JavaScript Alerts page', async () => {
  // Check all alert buttons are viisble
  await expect($('button=Click for JS Alert')).toBeDisplayed();
  await expect($('button=Click for JS Confirm')).toBeDisplayed();
  await expect($('button=Click for JS Prompt')).toBeDisplayed();

  // Check text of each button
  await expect($('button=Click for JS Alert')).toHaveText('Click for JS Alert');
  await expect($('button=Click for JS Confirm')).toHaveText('Click for JS Confirm');
  await expect($('button=Click for JS Prompt')).toHaveText('Click for JS Prompt');

  // Check if the buttons are enabled
  await expect($('button=Click for JS Alert')).toBeEnabled();
  await expect($('button=Click for JS Confirm')).toBeEnabled();
  await expect($('button=Click for JS Prompt')).toBeEnabled();

  // Check result text is visible
  await expect($('#result')).toBeDisplayed();
});

});
