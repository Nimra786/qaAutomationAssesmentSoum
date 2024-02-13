# QA-Automation-Assesment Project

Welcome to the QA-Automation-Assesment project! This project contains automated tests for [Website: https://www.saucedemo.com/].


## Prerequisites

Before running the tests, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (recommended version)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository:**
git clone https://github.com/Nimra786/QA-Test.git

2. **Navigate to the Project Directory:**
cd AutomationAssesment

3. **Install Dependencies:**
npm install

## Running Tests
Once the dependencies are installed, you can run the tests. There are two ways to run tests:

### 1. Using the Cypress Test Runner (Interactive Mode):
To run tests interactively in the Cypress Test Runner, use the following command:
npx cypress open

This command will open the Cypress Test Runner GUI, where you can select and run individual test files.

### 2. Using Headless Mode:
To run tests in headless mode (without the GUI), use the following command:
npx cypress run

### Login Page
– Contains all test cases related to login
I created two file login.js for objects and loginSpec.cy.js for test cases

### Logout Page
– Contains all test cases related to logout
I created two file logout.js for objects and logout.cy.js for test cases

### Product Page
– Contains all test cases related to product page
I created two file product.js for objects and product.cy.js for test cases

### Cart Page
– Contains all test cases related to cart page
I created two file cart.js for objects and cart.cy.js for test cases

### Info Page
– Contains all test cases related to info page
I created two file info.js for objects and info.cy.js for test cases

### Overview Page
– Contains all test cases related to overview page
I created two file overview.js for objects and overview.cy.js for test cases

### Menu Page
– Contains all test cases related to menu page
I created two file menu.js for objects and menu.cy.js for test cases

### Order Confirmation Page
– Contains all test cases related to Order Confirmation page
I created two file orderConfirmation.js for objects and orderConfirmation.cy.js for test cases

## API Spec File
– Contains all test cases For API
It will execute with same cypress commands (npx cypress open) 

### Other files
user.json has data for different users to get logged in provided on website.
cypress.json has baseUrl stuff.
