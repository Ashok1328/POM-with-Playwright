import {test, expect} from "@playwright/test"
import { LoginPage } from "../carriercenterapp/LoginPage.spec";
import { JobOpportunitiesPage } from "../carriercenterapp/JobOpportunitiesPage.spec";

test("Carrier Service Center", async({page}) =>
{
  //Login

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("ashok+admin1@gmail.com","@secret@")
    
    await this.page.waitForTimeout(3000);

  //Add job 
    const createJob = new JobOpportunitiesPage(page);
    await createJob.addJob();

    await this.page.waitForTimeout(3000);


  // Add job decsription



  //Logout
})