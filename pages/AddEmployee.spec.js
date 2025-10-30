exports.AddEmployee = class AddEmployee {
  constructor(page) {
    this.page = page;
    this.PIMLink = "//a[@class='oxd-main-menu-item active']";
    this.addEmployeeLink = "//a[normalize-space()='Add Employee']";
    this.employeeFullName = "//input[@placeholder='First Name']";
    this.employeeLastname = "//input[@placeholder='Last Name']";
    this.saveButton = "//button[normalize-space()='Save']";
  }

  async addEmployeeInfo(firstName, lastName) {
    await this.page.getByRole("link", { name: "PIM" }).click();
    await this.page.locator(this.addEmployeeLink).click();
    await this.page.locator(this.employeeFullName).fill(firstName);
    await this.page.locator(this.employeeLastname).fill(lastName);
    await this.page.locator(this.saveButton).click();
  }
};