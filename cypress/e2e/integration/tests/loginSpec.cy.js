import LoginPage from '../pages/loginPage.js';

describe('Login Test', () => {
  const baseUrl = Cypress.config('baseUrl');
  
  it('Verify Initial Presentation of Login Page', () => {
    // actions
    cy.visit(baseUrl);   

    // assertions
    cy.url().should('eq',baseUrl);
    cy.get(LoginPage.inpUsername).should('be.visible');
    cy.get(LoginPage.inpPassword).should('be.visible');
    cy.get(LoginPage.inpUsername).should('have.attr', 'placeholder', 'Username');
    cy.get(LoginPage.inpPassword).should('have.attr', 'placeholder', 'Password');
    cy.get(LoginPage.btnLogin).should('be.visible');
    cy.get(LoginPage.btnLogin).should('have.value', 'Login');
});

  it('Verify that a user can successfully log in with valid credentials.', () => {
        // actions
        cy.visit(baseUrl);   

        // assertions
        cy.get(LoginPage.inpUsername).should('be.visible');
        cy.get(LoginPage.inpPassword).should('be.visible');
        cy.get(LoginPage.inpUsername).should('have.attr', 'placeholder', 'Username');
        cy.get(LoginPage.inpPassword).should('have.attr', 'placeholder', 'Password');

        cy.get(LoginPage.btnLogin).should('be.visible');
        cy.get(LoginPage.btnLogin).should('have.value', 'Login');

        // actions
        cy.fixture('user').then((users) => {
          const user = users.users[0];
        cy.get(LoginPage.inpUsername).type(user.username);
        cy.get(LoginPage.inpPassword).type(user.password);
        cy.get(LoginPage.btnLogin).click();
        });

        // assertions
        cy.url().should('eq',baseUrl + 'inventory.html');
});

  it('Verify that an error message is displayed for invalid login attempts (e.g., incorrect username/password).', () => {
      // actions
      cy.visit(baseUrl);   

      // assertions
      cy.get(LoginPage.inpUsername).should('be.visible');
      cy.get(LoginPage.inpPassword).should('be.visible');
      cy.get(LoginPage.inpUsername).should('have.attr', 'placeholder', 'Username');
      cy.get(LoginPage.inpPassword).should('have.attr', 'placeholder', 'Password');

      cy.get(LoginPage.btnLogin).should('be.visible');
      cy.get(LoginPage.btnLogin).should('have.value', 'Login');

      // actions
      cy.fixture('user').then((users) => {
        const user = users.users[6];
      cy.get(LoginPage.inpUsername).type(user.username);
      cy.get(LoginPage.inpPassword).type(user.password);
      cy.get(LoginPage.btnLogin).click();
      });

      // assertions
      cy.get(LoginPage.errMessage).should('have.text','Epic sadface: Username and password do not match any user in this service');
      cy.url().should('eq', baseUrl);
      
});

  it('Verify that appropriate validation messages are displayed for empty username/password fields.', () => {
    // actions
    cy.visit(baseUrl);   

    // assertions
    cy.url().should('eq', baseUrl);
    cy.get(LoginPage.inpUsername).should('be.visible');
    cy.get(LoginPage.inpPassword).should('be.visible');
    cy.get(LoginPage.inpUsername).should('have.attr', 'placeholder', 'Username');
    cy.get(LoginPage.inpPassword).should('have.attr', 'placeholder', 'Password');

    cy.get(LoginPage.btnLogin).should('be.visible');
    cy.get(LoginPage.btnLogin).should('have.value', 'Login');
  
    cy.get(LoginPage.inpUsername).should('have.value', '');;
    cy.get(LoginPage.inpPassword).should('have.value', '');;
    
    // actions
    cy.get(LoginPage.btnLogin).click();

    // assertions
    cy.get(LoginPage.errMessage).should('have.text','Epic sadface: Username is required');
    cy.url().should('eq', baseUrl);
    
});
});
