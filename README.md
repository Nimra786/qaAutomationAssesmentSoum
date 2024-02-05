# QA-Test Project

Welcome to the Cypress project! This project contains automated tests for [Website: https://www.saucedemo.com/].


## Prerequisites

Before running the tests, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (recommended version)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository:**
git clone https://github.com/Nimra786/QA-Test.git

2. **Navigate to the Project Directory:**
cd QA-Test

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

### For Scenario-1
– Navigate to the URL and login with the usernames/profiles in the ‘Accepted
usernames’ section. If a user profile can login, create an assertion to verify this. If the user
is unable to login, create an assertion to verify this.

I created two file login.js and loginSpec.cy.js

### For Scenario-2
– Login to the website and validate the number of items on the page. Click on
the dropdown and select Price (low to high), assert that the first item has the lowest price
and that the last item has the highest price.

I created two file dashboard.js and dashboardSpec.cy.js

### For Scenario-3
– Add 3 items to the basket and assert the right number of items in the basket.
Remove one item and assert that the item has been removed and that the number of the
items in the basket has changed.


I created two file cart.js and cartSpec.cy.js

### Other files
user.json has data for different users to get logged in provided on website.

cypress.json has baseUrl stuff.
