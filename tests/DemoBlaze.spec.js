import { test, expect } from "@playwright/test";
import { LoginPage } from "../ecommerceapp/LoginPage.spec";
import { RegisterPage } from "../ecommerceapp/RegisterPage.spec";

test("DemoBlaze", async ({ page }) => {
  //Register
  const register = new RegisterPage(page);
  await register.gotoLoginPage();
  await register.register("Kriash", "Kriash@28");

  //Login
  const login = new LoginPage(page);
  await login.login("Kriash", "Kriash@28");

  //Home



  //Cart



  //PalceOrder


  
  //Logout
});
