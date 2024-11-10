# **Loan Calculator Test Project**

This repository contains an automated test suite for the Loan Calculator feature, covering both UI tests with Playwright and API tests with Postman. The purpose of this project is to verify the functionality of the loan calculator modal, ensure real-time updates in response to user inputs, and validate API calculations.

## **Prerequisites**

Before starting, ensure you have the following installed:
 - Git - to clone the project repository.
 - Node.js and npm - for managing project dependencies.
 - Playwright - installed through npm (instructions below).
 - Postman (optional) - to run the API test collection manually if
   desired.
 - You can download Node.js and npm [here](https://nodejs.org/).

## Setup Instructions

### Step 1: Clone the Repository
To get started, clone this repository to your local machine:

    git clone https://github.com/ngiulino/loan-calculator-test

### Step 2: Navigate to the Project Directory
Go to the project's root directory:

    cd loan-calculator-test

### Step 3: Install Dependencies

Install all required dependencies for the project using npm:

    npm install

This command will install Playwright and other dependencies specified in the package.json file.

### Step 4: Install Playwright Browsers

Playwright requires specific browsers to run tests. Download them with the following command:

    npx playwright install

### Step 5: Configure Environment Variables (Optional)

If the project uses a `.env` file for configuration (e.g., base URL), you can create one in the project's root directory:

    touch .env

Add the environment variables required by the project. For example:

    BASE_URL=https://taotlus.bigbank.ee

> **Note:** Ensure that the Playwright configuration file
> (`playwright.config.ts`) is set up to read environment variables from
> `.env`.

## Running the Automated Tests

### Running Playwright Tests

 1. **Run all tests:**

	To execute all Playwright tests, use the following command:
	`npx playwright test`
 
 2. **Generate an HTML report:**
	
	For a detailed report of test results, run:
	`npx playwright test --reporter=html`
	
	After running the command, open the report by navigating to 
	`playwright-report/index.html`.

 3. **Run specific tests:**
	
	 You can specify a particular test file. For example:
	`npx playwright test tests/calculator.spec.ts`

 4. **Run tests in specific browsers:**
	
	 To run tests in a specific browser, use the following command:
	`npx playwright test --project=chromium`
	
	Replace `chromium` with `firefox` or `webkit` to test in other 		browsers.

 5. **Run tests in UI mode:**
	 Playwright also offers an interactive UI to debug tests:

	`npx playwright test --ui`

### Running Postman API Tests

This project includes a Postman collection and a sample report for the `calculate` endpoint. Follow these steps to import and run the API tests in Postman:

 **1. Import the Postman Collection:**

 - Open Postman.
 - Import the `BigBank - Loan Calculator API test.postman_collection.json` file included in this repository.
 
 **2. Run the Collection:**
 - Run the collection using the **Collection Runner** in Postman.
 - This collection covers various test scenarios, including valid inputs, boundary values, and invalid inputs for the `calculate` endpoint.
 
 **3. View the Report:**
 - The results of a sample test run are provided in the file `BigBank -
   Loan Calculator API test.postman_test_run.json`
> **Note:** The collection includes scenarios for standard values, boundary testing, and error handling to validate that the `calculate` endpoint returns correct responses.

## Test Scenarios Covered

### Playwright UI Tests

 1. Open and Close the Calculator Modal
	 - Verifies that the modal opens and closes correctly.
 2. Adjust Loan Amount and Check Real-Time Updates
	 - Verifies that the monthly payment updates in real-time when changing the loan amount.
 3. Check Minimum and Maximum Values for Loan Amount
	 - Ensures that the loan amount field accepts and displays correct boundary values.

### Postman API Tests for `calculate` Endpoint

 1. Valid Input - Standard Values
	 -   Sends a request with typical values to ensure correct calculations.
 2. Boundary Values
	 -  Tests minimum and maximum values for loan amount and period.
 3. Invalid Input Handling
	 -   Verifies that the API returns appropriate errors for values outside acceptable limits.
 4. Zero or Null Values
	-   Ensures that zero or null values are handled properly.
 5. Negative Values
	 -  Confirms that negative values are not accepted for loan calculations.
