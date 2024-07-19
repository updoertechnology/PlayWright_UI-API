// @ts-check
const { expect } = require('@playwright/test');
class DashboardPage {

constructor(page) {
    this.page = page;
    this.activeIssueBtn = page.locator("(//div[contains(@class,'appMenu')]//div//button)[3]");
    this.activeIssueBtn2 = page.locator("(//span[@class='MuiTouchRipple-root css-w0pj6f'])[63]");
    this.severityChangeLogDropdown = page.locator("(//div[contains(@class,'filterBox')]//span)[1]");
    this.highSeverityChkBox = page.locator("(//input[@value='High'])[1]")
    this.activeIssueCount = page.locator("[class='css-2dl6fu-count']");
}
async clickOnActiveIssueBtn() {

    // await this.page.waitForLoadState("networkidle");
    await this.activeIssueBtn.click();
    await this.activeIssueBtn2.click();

}
async selectSeverityDropdown() {
    await this.severityChangeLogDropdown.click();
}
async clickOnHighSeverityCheckBox() {
    await this.highSeverityChkBox.click();
}
async getActiveIssueCount() {
   const currentActiveIssueCount = await this.activeIssueCount.textContent();
   console.log("------Current Active Issue: "+currentActiveIssueCount)
}

}
module.exports = { DashboardPage }