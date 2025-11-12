// Assignment: 3 Create a new Account
// 1. Navigate to the url https://login.salesforce.com/
// 2. Enter username using getByLabel
// 3. Enter password using getByLabel
// 4. Click Login
// 5. Verify the title and url of the page using appropriate assertions
// 6. Click App Launcher using the class locator
// 7. Click View All using getByText
// 8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
// 9. Click Service using index based XPath
// 10. Click Accounts using attribute based CSS selector
// 11. Click New using getByRole
// 12. Enter Account name using attribute based CSS selector
// 13. Click Save button using XPath
// 14. Verify the toast message displayed

import {test,expect} from '@playwright/test'
test("Create sales",async({page})=>{

     await page.goto("https://login.salesforce.com/?locale=in") 
     await page.waitForTimeout(2000)
    await page.getByLabel('username').fill("dilipkumar.rajendran@testleaf.com") 
    //first(), .nth(), .last() 
    await page.getByLabel('password').fill("TestLeaf@2025")
     await page.locator("#Login").click() 
     await page.waitForTimeout(5000)
    const title = await page.title()
    console.log(title)
    const expValue = "Home | Salesforce"
    const actValue = title
    await expect(actValue).toEqual(expValue)
    console.log("Title matched")
    const URL = await page.url()
    console.log(URL)
    const expValue2= "https://testleaf.lightning.force.com/lightning/page/home"
    const actValue2 = URL
    await expect(actValue2).toEqual(expValue2)
    console.log("URL Matched")
    await page.waitForTimeout(3000)
    await page.locator('.slds-assistive-text').nth(5).click()
    await page.waitForTimeout(5000)
    await page.pause();// we can inspect in live using this//this show that view all is 3 of 3
    await page.getByText('View All').nth(2).click();
    await page.waitForTimeout(3000)
    await page.getByPlaceholder('Search apps or items...').fill('service')
    await page.waitForTimeout(3000)
    await page.locator('//one-app-launcher-app-tile[1]').click()
    await page.waitForTimeout(3000)
    await page.locator('.slds-truncate').nth(6).click()
    await page.waitForTimeout(3000)
    await page.getByRole('button',{name:'New'}).click()
    await page.waitForTimeout(3000)
    await page.locator('.slds-input').nth(2).fill('Jana')
    await page.waitForTimeout(3000)
    await page.locator("//button[@name='SaveEdit']").click()
    await page.waitForTimeout(1000)
    await expect(page.locator('.toastContainer.slds-notify_container.slds-is-relative')).toBeVisible()
    console.log("Yes it's displayed")
    

    

})
