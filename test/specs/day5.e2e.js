const fs = require('fs');
const path = require('path');

describe('File Upload on Android using Appium', () => {
  it('should upload a file via file input', async () => {
    // 1. Navigate to the upload page
    await browser.url('https://the-internet.herokuapp.com/upload');

    // 2. Define the local file path and read it as base64
    const filePath = path.resolve(__dirname, 'resources/sample.png');
    const fileContent = fs.readFileSync(filePath, { encoding: 'base64' });

    // 3. Define the target path in device (must be an absolute path!)
    const remotePath = '/data/local/tmp/sample.png';

    // 4. Push file to Android device
    await driver.pushFile(remotePath, fileContent);

    // 5. Set the remote path on the file input
    const fileInput = await $('//*[@id="file-upload"]');
    await fileInput.setValue(remotePath);

    // 6. Submit the form
    const uploadButton = await $('//*[@id="file-submit"]');
    await uploadButton.click();

    // 7. Validate the success
    const uploadedHeader = await $('h3');
    await expect(uploadedHeader).toHaveText('File Uploaded!');
  });
});
