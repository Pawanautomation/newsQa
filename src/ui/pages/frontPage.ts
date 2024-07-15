import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class FrontPage extends BasePage {
  pageUrl: string;

  constructor(page: Page) {
    super(page);
    this.pageUrl = `${this.baseUrl}front`;
  }

  async goTo(): Promise<void> {
    this.logger.info(`Navigating to -> ${this.pageUrl}`);
    await this.page.goto(this.pageUrl);
  }
}
