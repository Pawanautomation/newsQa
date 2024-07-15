import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class NewestPage extends BasePage {
  pageUrl: string;

  constructor(page: Page) {
    super(page);
    this.pageUrl = `${this.baseUrl}newest`;
  }

  async goTo(): Promise<void> {
    this.logger.info(`Navigating to -> ${this.pageUrl}`);
    await this.page.goto(this.pageUrl);
  }
}
