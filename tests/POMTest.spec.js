import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.spec";
import { AddEmployee } from "../pages/AddEmployee.spec";
import { RecruitmentEmployee } from "../pages/Recruitment.spec";

test("OranageHRM", async ({ page }) => {
  //Login
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("Admin", "admin123");

  await page.waitForTimeout(3000);

  //PIM Employee Adding
  const EmployeeInfo = new AddEmployee(page);
  await EmployeeInfo.addEmployeeInfo("Kriti", "Neupane");

  await page.waitForTimeout(3000);

  // Recruitment
  const Recruitment = new RecruitmentEmployee(page);
  await Recruitment.addCandidates("Kriti Neupane");

  await page.waitForTimeout(3000);
});
