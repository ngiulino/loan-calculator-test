// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://laenutaotlus.bigbank.ee', // Set the base URL of your application
    headless: true, // Run tests in headless mode (without UI)
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } }, // Test in Chromium (Chrome)
    { name: 'Firefox', use: { browserName: 'firefox' } },    // Test in Firefox
    { name: 'WebKit', use: { browserName: 'webkit' } },      // Test in WebKit (Safari)
  ],
});
