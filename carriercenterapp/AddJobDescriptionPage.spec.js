exports.AddJobDescriptionPage = class AddJobDescriptionPage {
  constructor(page) {
    this.page = page;
    this.jobTitleInput = "";
    this.jobType = "";
    (this.noofjobs = ""), (this.jobDescription = "");
    this.postedData = "";
    this.deadlineToApply = "";
    this.country = "";
    this.recruiter = "";
    this.applicationProcess = "";
    this.accessType = "";
    this.tags = "";
    this.createNewJobBtn = "";
  }

  async createJob(title, description) {
    await this.page.locator(this.jobTitleInput).fill(title);
    await this.page.locator(this.jobTitleInput).select();
    await this.page.locator(this.noofjobs).select();
    await this.page.locator(this.jobDescription).fill(description);
    await this.page.locator(this.postedData).select();
    await this.page.locator(this.deadlineToApply).select();
    await this.page.locator(this.country).select();
    await this.page.locator(this.recruiter).select();
    await this.page.locator(this.applicationProcess).select();
    await this.page.locator(this.accessType).select();
    await this.page.locator(this.tags).select();
    await this.page.locator(this.createNewJobBtn).click();
  }
};
