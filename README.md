
---

# HackerNewsFinal

This project is a testing suite for Hacker News using Playwright for end-to-end testing. It includes tests for verifying the sorting order of news articles on different pages.

## Project Structure

```
/HackerNewsFinal
  /node_modules
  /playwright-report
  /src
    /api
      newsService.ts
    /ui
      /pages
        basePage.ts
        frontPage.ts
        newestPage.ts
  /test-results
  /tests
    fixture.ts
    testHackerNewsApi.spec.ts
    testSortedOrderHackerNews.spec.ts
  /utilities
    logger.ts
  .env
  .gitignore
  combined.log
  global-setup.ts
  global-teardown.ts
  package.json
  playwright.config.ts
  vite.config.ts
```

## Prerequisites

Ensure you have the following installed:

- Node.js
- npm

## Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/HackerNewsFinal.git
cd HackerNewsFinal
```

2. Install the dependencies:

```sh
npm install
```

## Environment Variables

Create a `.env` file in the root directory with the following content:

```env
BASE_URL="https://news.ycombinator.com/"
BASE_URI="https://hacker-news.firebaseio.com/v0"
```

## Configuration Files

### `vite.config.ts`

The `vite.config.ts` file configures Vite to use the Istanbul plugin for instrumenting code for coverage.

```typescript
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'tests/'],
      extension: ['.js', '.ts'],
      requireEnv: false,
    }),
  ],
});
```

### `playwright.config.ts`

The `playwright.config.ts` file configures Playwright for end-to-end testing.

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  globalSetup: require.resolve('./utilities/global-setup'),
  globalTeardown: require.resolve('./utilities/global-teardown'),
});
```

## Running Tests

To run the tests, use the following command:

```sh
npx playwright test
```

## Project Files Overview

### `src/api/newsService.ts`

This file contains the `NewsService` class for fetching news data from the Hacker News API.

### `src/ui/pages/basePage.ts`

This file contains the `BasePage` class, which provides common functionality for all page objects, such as extracting timestamps and validating sorting.

### `src/ui/pages/frontPage.ts`

This file contains the `FrontPage` class, which extends the `BasePage` class and navigates to the front page of Hacker News.

### `src/ui/pages/newestPage.ts`

This file contains the `NewestPage` class, which extends the `BasePage` class and navigates to the newest page of Hacker News.

### `tests/fixture.ts`

This file sets up custom fixtures for Playwright tests.

### `tests/testHackerNewsApi.spec.ts`

This file contains API tests for verifying the sorting of Hacker News articles.

### `tests/testSortedOrderHackerNews.spec.ts`

This file contains UI tests for verifying the sorting order of news articles on different pages.

### `utilities/logger.ts`

This file sets up a singleton logger using Winston for logging test information.

### Global Setup and Teardown

#### `utilities/global-setup.ts`

This file contains global setup logic for Playwright tests.

#### `utilities/global-teardown.ts`

This file contains global teardown logic for Playwright tests.

## Troubleshooting

If you encounter any issues, ensure that:

- All dependencies are installed.
- Environment variables are correctly set up in the `.env` file.
- The directory structure matches the descriptions above.
- The necessary permissions are granted to write logs and reports.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

---

This README file provides a comprehensive overview of your project, including instructions for setup, configuration, and running tests, without including the actual script files or coverage details.
