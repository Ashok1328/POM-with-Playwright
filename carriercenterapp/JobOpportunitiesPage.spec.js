const { LoginPage } = require("../ecommerceapp/LoginPage.spec");

exports.JobOpportunitiesPage = class JobOpportunitiesPage {
  constructor(page) {
    this.page = page;
    this.jobOpportunitiesLink =
      "//span[normalize-space()='Internship/ Job Opportunities']";
    this.createJobOpportunitiesBtn =
      "//span[normalize-space()='Create Job Opportunity']";
  }

  async addJob() {
    await this.page.locaors(this.jobOpportunitiesLink).click();
    await this.page.locators(this.createJobOpportunitiesBtn).click();
  }
};
