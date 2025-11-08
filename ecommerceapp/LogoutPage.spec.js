exports.Logoutpage = class Logoutpage {
  constructor(page) {
    this.page = page;
    this.logoutLink = "#logout2";
  }

  async logout() {
    await this.page.getByRole("link", { name: "Log out" }).click();
  }
};
