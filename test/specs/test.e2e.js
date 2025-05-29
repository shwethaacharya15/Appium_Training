import { expect, browser, $ } from "@wdio/globals";


describe('Login Test on Mobile Web', async() => {
     
    it('should check if Manage tab is present and clickable', async () => {

        await browser.setTimeout({ 'pageLoad': 30000, 'implicit': 10000 });
    
        await browser.url('https://advisor.forastaging.net/login?from=/');
    
        const signIn = await $('//*[@id="__next"]/div/div/div/div[2]/div[1]/div/div[3]/div[2]/a');
        await signIn.click();
    
        const username = await $('#username')
        await username.setValue('kaviya123@qaoncloud.com');

        const password = await $('#password')
        await password.setValue('Qaoncloud@01');

        const loginBtn = await $('//*[@id="__next"]/div/div/div/div[2]/div[1]/div/form/div[3]/button');
       await browser.execute((el) => el.click(), loginBtn);

    
        // Add wait or verify login success before proceeding
        await browser.pause(5000); 

        
        const foraButton = await $('//*[@id="global-header"]/div[1]/button');
        await foraButton.waitForDisplayed({ timeout: 30000 }); 
        await foraButton.click();
    
        const thirdButton = await $('//*[@id="side-menu"]/nav/div[1]/button[3]');
        await thirdButton.waitForDisplayed({ timeout: 10000 });
        await thirdButton.click();
    
        const clientsDiv = await $('//*[@id="side-menu"]/nav/div[2]/div/div/div[1]/div');
        await clientsDiv.waitForDisplayed({ timeout: 10000 });

        const clientsLink = await clientsDiv.$('.//*[contains(text(), "Clients")]');
        await clientsLink.waitForDisplayed({ timeout: 10000 });
        await clientsLink.click();
    
        const addClientButton = await $("//button[contains(text(), 'Add Client')]");
        await addClientButton.waitForDisplayed({ timeout: 5000 });
        await addClientButton.click();
       
    

        // First Name
        const firstNameInput = await $('//*[@id="first_name"]');
        await firstNameInput.waitForDisplayed({ timeout: 5000 });
        await firstNameInput.setValue('umszfdada');

         // Middle Name
        const middleNameInput = await $('#middle_name');
        await middleNameInput.waitForDisplayed({ timeout: 5000 });
        await middleNameInput.setValue('K');
    
        // Last Name
        const lastNameInput = await $('#last_name');
        await lastNameInput.waitForDisplayed({ timeout: 5000 });
        await lastNameInput.setValue('Samdf');
    
        //Submit button
        const submitBtn = await $('/html/body/div[2]/div/div/div/div/div[2]/div[2]/form/div/button[2]');
        await submitBtn.waitForDisplayed({ timeout: 15000 });
        await submitBtn.scrollIntoView();
        await submitBtn.click();
    });
    
        
  
})
