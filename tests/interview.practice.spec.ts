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




