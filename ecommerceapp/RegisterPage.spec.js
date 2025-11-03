exports.RegisterPage = class RegisterPage {
  constructor(page) {
    this.page = page;
    this.signupLink = "#signin2";
    this.usernameInput = "#sign-username";
    this.passwordInput = "#sign-password";
    this.signupBtn = "//button[normalize-space()='Sign Up']";
  }

  async gotoLoginPage() {
    await this.page.goto("https://demoblaze.com");
  }

  async register(username, password) {
    await this.page.locator(this.signupLink).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.signupBtn).click();
  }
};
