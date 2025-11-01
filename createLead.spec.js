// Assignment Details:
// Create a test script that navigates to a CRM application, logs in, finds a specific lead by name or
// ID, edits details of the lead (such as name, email, or status), and verifies that the changes have
// been successfully saved.
// Precondition:
// - Use a fixture to setup and teardown
// Test Steps:
// Assignment: 1 Create a Lead

// 14. Fill the Department
// 15. Fill the Phone number
// 16. Click Create Lead button
// 17. Verify the company n

import {test,expect} from '@playwright/test'

test("Create",async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.waitForTimeout(2000)
    await page.getByLabel('username').fill('Demosalesmanager')
    await page.waitForTimeout(2000)
    await page.locator('#password').fill('crmsfa')
    await page.waitForTimeout(2000)
    await page.locator("//input[@type='submit']").click()
    await page.waitForTimeout(2000)
    await page.locator("#button").click()
    await page.waitForTimeout(3000)
    await page.locator('.x-panel-header').nth(1).click()
    await page.waitForTimeout(3000)
    await page.locator("//a[text()='Create Lead']").click()
     await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_companyName').fill('Agilysys')
     await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_firstName').fill('Janarthanan')
     await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_lastName').fill('S')
     await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_personalTitle').fill('Spiderman')
     await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_generalProfTitle').fill('Marvel')
     await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_annualRevenue').fill('20000')
     await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_departmentName').fill('Hospitality')
     await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('2220202234')
    await page.waitForTimeout(2000)
    await page.locator('.smallSubmit').click()
    await page.waitForTimeout(3000)
    const expValue = 'Agilysys'
    const actValue = await page.locator('#viewLead_companyName_sp')
   await expect.soft(actValue).toContainText(expValue)
   console.log("Company name matched")


    



})