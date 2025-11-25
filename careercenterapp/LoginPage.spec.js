exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "#email";
    this.passwordInput = "#password";
    this.loginBtn = "//button[normalize-space()='Login']";
  }

  async gotoLoginpage() {
    await this.page.goto("https://stage.careerservicelab.com/login");
  }

  async login(username, password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginBtn).click();
  }
};
