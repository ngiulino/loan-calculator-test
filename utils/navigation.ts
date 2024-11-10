import { Page } from '@playwright/test';

// Define the type for calculator parameters
type CalculatorParams = {
  amount?: number;
  period?: number;
  productName?: string;
  loanPurpose?: string;
};

// Helper function to navigate to the calculator page with parameters
export async function goToCalculatorPage(
  page: Page,
  { amount = 5000, period = 60, productName = 'SMALL_LOAN', loanPurpose = 'DAILY_SETTLEMENTS' }: CalculatorParams
) {
  const url = `/?amount=${amount}&period=${period}&productName=${productName}&loanPurpose=${loanPurpose}`;
  await page.goto(url);
}
