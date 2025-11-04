// Assignment: 2 Edit a Lead
// 1. Navigate to the url http://leaftaps.com/opentaps/control/main
// 2. Enter the username as ‘Demosalesmanager’
// 3. Enter the password as ‘crmsfa’
// 4. Click the Login button
// 5. Click CRM/SFA
// 6. Click Leads
// 7. Click Find Leads
// 8. Enter the first name
// 9. Click Find Leads button
// 10. Click the first resulting Lead ID
// 11. Click Edit
// 12. Edit Company name
// 13. Edit Annual Revenue
// 14. Edit Department
// 15. Enter Description
// 16. Click Update
// 17. Verify the edited fields using appropriate assertions

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
    await page.locator("//a[text()='Find Leads']").click()
    await page.waitForTimeout(2000)
    await page.locator('.x-form-text.x-form-field').nth(28).fill('Jana')
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:'Find Leads'}).click()
    await page.waitForTimeout(2000)
    await page.locator('.x-grid3-col.x-grid3-cell.x-grid3-td-partyId.x-grid3-cell-first').first().click()
    await page.waitForTimeout(2000)
    await page.locator(".linktext").nth(3).click()
    await page.waitForTimeout(2000)
    await page.locator('.subMenuButton').nth(2).click()
    await page.waitForTimeout(2000)
    await page.locator('#updateLeadForm_companyName').fill('Good')
    await page.waitForTimeout(2000)
    await page.locator('#updateLeadForm_annualRevenue').fill('2000')
    await page.waitForTimeout(2000)
    await page.locator('#updateLeadForm_departmentName').fill('IT')
    await page.waitForTimeout(2000)
    await page.locator('#updateLeadForm_description').fill('Description')
    await page.waitForTimeout(2000)
    await page.locator('.smallSubmit').nth(0).click()
    await page.waitForTimeout(5000)
    const expValue1 = 'Good'
    const expValue2 = 'IT'
    const expValue3 = '$2,000.00'
    
    const expValue4 = 'Description'
    const actValue1 = page.locator('#viewLead_companyName_sp')
    const actValue2 = page.locator('.tabletext').nth(11)
    const actValue3 = page.locator('.tabletext').nth(12)
    
    const actValue4 = page.locator('#viewLead_description_sp')

    await expect(actValue1).toContainText(expValue1)
    console.log("Company Name Matched")
    
    await expect(actValue2).toContainText(expValue2)
    console.log("Department Name Matched")
    

    await expect(actValue3).toContainText(expValue3)
    console.log("Annual Revenue Name Matched")

    await expect.soft(actValue4).toContainText(expValue4)
    console.log("Description Matched")
    


})