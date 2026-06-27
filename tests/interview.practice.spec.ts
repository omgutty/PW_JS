import {expect, Page, test} from '@playwright/test'

//1. Automate login with valid credentials
test("login with valid credentials ", async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name','standard_user');
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');
    await page.waitForURL('**/inventory.html');
    expect(page).toHaveURL(/inventory/);
})

//2. Automate login with invalid credentials 

test("invalid login ", async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name','standard_user');
    await page.fill('#password','secret_sauce222');
    await page.click('#login-button');
    await expect( page.getByRole('heading', { name: 'Epic sadface: Username and password do not match any user in this service' })).toHaveText('Epic sadface: Username and password do not match any user in this service')
})

//3. fill the form 

test('filling the form', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#name').fill("om gutty");
    await page.waitForTimeout(2000);
    
    
    //5. Automate radio button selection
    await page.click('#male');
    await page.locator('#female').click();
    await page.getByLabel('Male', { exact: true })

    await page.selectOption('#country','India')
    await page.selectOption('#country',{label:'Canada'})

    //4. Automate checkbox selection

    //await page.getByLabel('Sunday', {exact:true}).click();
    await page.check('#sunday');
    await expect(page.locator('#sunday')).toBeChecked();
    await page.waitForTimeout(2000);
})




//6. Automate file upload
test("Automate file upload", async ({page})=>{
    await page.goto('https://practice.expandtesting.com/upload');
    await page.setInputFiles('#fileInput','Om_gutty_Resume_17-06-2026.docx');
    await page.click('#fileSubmit');
    await page.waitForTimeout(2000);

    
})

//7. Automate file download

test("Automate file download", async ({page})=>{
    await page.goto('https://practice.expandtesting.com/download');
    
    const downloadpromise= page.waitForEvent('download');
    //await page.getByText('1782290920969_DNDAgentFile.txt', { exact: true }).click()
    await page.getByRole('link', { name: '1782290904290_DNDAgentFile.txt' }).click();
    const download = await downloadpromise;
    console.log(download.suggestedFilename())

    await page. waitForTimeout(5000);
    
})

test("ads", async ({page, context})=>{
    await page.goto('');

    const [newtab]=await Promise.all([
        await context.waitForEvent('page'),
        page.click('')
    ])
    
    await newtab.waitForLoadState();

    
})


test('infine scroll',async ({page})=>{
    let previousHeight = 0;

while (true) {
    const currentHeight = await page.evaluate(() => document.body.scrollHeight);

    if (currentHeight === previousHeight) {
        break; // No new content loaded
    }

    previousHeight = currentHeight;

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);
}
})

