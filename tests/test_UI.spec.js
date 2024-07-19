// @ts-check
// @ts-ignore
const { test, expect, request } = require("@playwright/test");
const { testConfig } = require("../utils/testData");
const { POManager } = require("../pages/POManager");

test("Login UI", async ({ page }) => {
  const poManager = new POManager(page);
  const loginpage = poManager.getLoginPage();
  const dashboardPage = poManager.getDashboardPage();

  await loginpage.navigateToUrl(testConfig.url);

  await expect(page).toHaveTitle(/OX Security/);
  await loginpage.validateLogin(testConfig.username, testConfig.password);

  await dashboardPage.clickOnActiveIssueBtn();
  await dashboardPage.selectSeverityDropdown();
  await dashboardPage.clickOnHighSeverityCheckBox();
  await dashboardPage.getActiveIssueCount();
});
