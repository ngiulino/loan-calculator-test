import { test, expect } from '@playwright/test';
import { goToCalculatorPage } from '../utils/navigation';

test.describe('Loan Calculator Tests', () => {
  
  test('Open and close the calculator modal', async ({ page }) => {
    // Navigate with default parameters
    await goToCalculatorPage(page, {});
    const modal = page.locator('.bb-modal');
    await expect(modal).toBeVisible();

    const closeButton = modal.locator('.bb-modal__close');
    await closeButton.click();
    await expect(modal).not.toBeVisible();
  });

  test('Adjust loan amount and check real-time updates', async ({ page }) => {
    // Navigate with custom parameters
    await goToCalculatorPage(page, { amount: 10000 });
    const amountSliderInput = page.locator('#header-calculator-amount .bb-input__input');
    const monthlyPayment = page.locator('.bb-labeled-value__value'); 

    await amountSliderInput.fill('10000');  // Set loan amount to 10,000
    await expect(monthlyPayment).not.toBeEmpty();
  });

  test('Check minimum and maximum values for loan amount', async ({ page }) => {
    // Navigate with default parameters
    await goToCalculatorPage(page, {});
    const amountSliderInput = page.locator('#header-calculator-amount .bb-input__input');
    
    await amountSliderInput.fill('500');  // Minimum value
    await expect(amountSliderInput).toHaveValue('500');

    await amountSliderInput.fill('30000'); // Maximum value
    await expect(amountSliderInput).toHaveValue('30000');
  });

});
