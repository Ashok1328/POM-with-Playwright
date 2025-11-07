import { test, expect } from "@playwright/test";
import { LoginPage } from "../ecommerceapp/LoginPage.spec";
import { RegisterPage } from "../ecommerceapp/RegisterPage.spec";
import { HomePage } from "../ecommerceapp/HomePage.spec";
import { CartPage } from "../ecommerceapp/CartPage.spec";
import { PlaceOrder } from "../ecommerceapp/PlaceOrder.spec";
import { Logoutpage } from "../ecommerceapp/LogoutPage.spec";

test("DemoBlaze", async ({ page }) => {
  //Register
  const register = new RegisterPage(page);
  await register.gotoLoginPage();
  await register.register("Kriash", "Kriash@28");

  await page.waitForTimeout(3000);

  //Login
  const login = new LoginPage(page);
  await login.login("Kriash", "Kriash@28");

  await page.waitForTimeout(3000);

  //Home
  const home = new HomePage(page);
  await home.addProductToCart(
    "Samsung galaxy s6",
    "MacBook Pro",
    "Apple monitor 24"
  );
  await page.waitForTimeout(5000);
  await home.goToCart();

  //Cart
  const cart = new CartPage(page);
  await page.waitForTimeout(5000);
  const status = await cart.checkProductInCart(
    "Samsung galaxy s6",
    "MacBook Pro",
    "Apple monitor 24"
  );
  expect(await status).toBe(true);

  await page.waitForTimeout(3000);

  //PalceOrder
  const order = new PlaceOrder(page);
  await order.shippingAddress(
    "Kriash",
    "Dubaie",
    "AbuDabi",
    "1750125369424589",
    "Feb",
    "2024"
  );
  await page.waitForTimeout(5000);

  //Logout
  const logout = new Logoutpage(page);
  await logout.logout();
});
