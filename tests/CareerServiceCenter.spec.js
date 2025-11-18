import {test, expect} from "@playwright/test"
import { LoginPage } from "../carriercenterapp/LoginPage.spec";

test("Carrier Service Center", async({page}) =>
{
  //Login

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("ashok+admin1@gmail.com","@secret@")
    
    await this.page.waitForTimeout(3000);

  //Add job 



  // Add decsription page



  //Logout
})