import { test, expect } from "@playwright/test";
import { LoginPage } from "../careercenterapp/LoginPage.spec";
import { JobOpportunitiesPage } from "../careercenterapp/JobOpportunitiesPage.spec";
import { AddJobDescriptionPage } from "../careercenterapp/AddJobDescriptionPage.spec";

test("Carrier Service Center", async ({ page }) => {
  //Login

  const login = new LoginPage(page);
  await login.gotoLoginpage();
  await login.login("ashok+admin1@gmail.com", "@secret@");


  //Add job
  const addjob = new JobOpportunitiesPage(page);
  await addjob.addJob();

  await this.page.waitForTimeout(3000);

  // Add job decsription
  const createjob = new AddJobDescriptionPage(page);
  await createjob.createJob("QA Engineer", "Automation");

  await this.page.waitForTimeout(3000);

  //Logout
});
