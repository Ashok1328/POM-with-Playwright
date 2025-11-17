exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "";
    this.passwordInput = "";
    this.loginBtn = "";
  }

  async gotoLoginpage() {
    await this.page.goto("");
  }

  async login(username, password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginBtn).click();
  }
};
