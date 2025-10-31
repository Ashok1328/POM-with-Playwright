exports.RecruitmentEmployee = class RecruitmentEmployee {
  constructor(page) {
    this.page = page;
    this.jobTitle =
      "//div[@class='oxd-table-filter']//div[1]//div[1]//div[1]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]";
    this.vacancy =
      "//div[@class='oxd-table-filter']//div[1]//div[1]//div[1]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]";
    this.hiringManager =
      "//div[@class='oxd-table-filter']//div[1]//div[1]//div[1]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]";
    this.status =
      "//div[@class='oxd-table-filter']//div[1]//div[1]//div[1]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]";
    this.dateOfApplication = ".oxd-calendar-date-wrapper";
    this.methodOfApplication =
      "//div[@class='oxd-table-filter']//div[1]//div[1]//div[1]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]";
    this.searchBtn = "//button[normalize-space()='Search']";
  }

  async addCandidates(username) {
    this.page.getByRole("link", { name: "Recruitment" }).click();
    this.page.locator(this.jobTitle).selectOption("QA Engineer"); ////span[normalize-space()='QA Engineer']
    this.page.locator(this.vacancy).selectOption("Junior QA Engineer");
    this.page.locator(this.hiringManager).selectOption("Rahul Patil");
    this.page.locator(this.status).selectOption("Job Offered");
    this.page
      .getByRole("textbox", { name: "Type for hints..." })
      .fill(username);

    const datess = await this.page.$$(this.dateOfApplication);
    for (const dt of datess) {
      if ((await dt.textContent()) == datess) {
        await dt.click();
        break;
      }
    }

    const dates = await this.page.$$(this.dateOfApplication);
    for (const dt of dates) {
      if ((await dt.textContent()) == dates) {
        await dt.click();
        break;
      }
    }

    this.page.locator(this.methodOfApplication).selectOption("Online");
    this.page.locator(this.searchBtn).click();
  }
};
