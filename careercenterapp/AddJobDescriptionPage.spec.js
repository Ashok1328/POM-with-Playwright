exports.AddJobDescriptionPage = class AddJobDescriptionPage {
  constructor(page) {
    this.page = page;
    this.jobTitleInput = "job_title";
    this.jobType = "//div[contains(@class,'grid grid-cols-2 gap-6')]//div[2]//div[1]//div[1]//div[2]//div[1]//div[1]//div[2]";
    this.noOfOpenings = "", 
    this.jobDescription = "//div[@class='ql-editor ql-blank']";
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

    await this.page.locator(this.jobType).click();
    await this.page.waitForTimeout(3000);
    const options = await page
    
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
