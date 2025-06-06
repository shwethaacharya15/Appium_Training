const fs = require('fs');
const path = require('path');

describe('File upload - Shadow DOM using Appium + WebDriverIO', () => {
  it('should upload file inside shadow DOM', async () => {
    // Navigate to the URL
    await browser.url('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');

    // Wait for page load
    await browser.pause(3000);

    // 1. Read file and convert to base64
    const localPath = path.resolve(__dirname, 'resources/sample.png');
    const fileContent = fs.readFileSync(localPath, { encoding: 'base64' });

    // 2. Define device path for upload
    const remotePath = '/data/local/tmp/sample.png';
    await browser.pushFile(remotePath, fileContent);

    // 3. Inject JS to access shadow DOM & set file input value
    await browser.execute(() => {
      const shadowHost = document.querySelector('smart-file-upload');
      const shadowRoot = shadowHost.shadowRoot;
      const fileInput = shadowRoot.querySelector('.smart-browse-input');
      fileInput.style.display = 'block'; // ensure it’s visible
    });

    // 4. Set file input using Appium
    const shadowInput = await browser.$('smart-file-upload >>> .smart-browse-input'); // Shadow Piercing
    await shadowInput.setValue(remotePath);

    // 5. Validate uploaded filename
    const fileLabel = await browser.$('smart-file-upload >>> .smart-item-name');
    await expect(fileLabel).toHaveTextContaining('sample.png');

    await browser.pause(5000);
  });
});
