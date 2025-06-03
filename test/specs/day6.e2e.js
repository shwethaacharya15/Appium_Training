const fs = require('fs');
const path = require('path');

describe('File Upload on Android using Appium', () => {
  it('should upload a file via file input', async () => {

const downloadFileUsingAppium = async (driver) => {
  // Open the URL
  await driver.url('https://commitquality.com/practice-file-download');

  // Click the download button using XPath
  const downloadBtn = await driver.$('//*[@id="root"]/div/div/div/button');
  await downloadBtn.click();

  // Wait for download to complete
  await driver.pause(5000);

  // Define expected filename
  const filename = 'sample.txt';  // Change to actual downloaded file name
  const downloadPath = `/sdcard/Download/${filename}`;

  // List files in Download folder
  const filesList = await driver.execute('mobile: shell', {
    command: 'ls',
    args: ['/sdcard/Download/']
  });

  if (filesList.includes(filename)) {
    console.log('File downloaded successfully!');
  } else {
    console.log('File NOT found in Downloads folder.');
  }
};

  })
})