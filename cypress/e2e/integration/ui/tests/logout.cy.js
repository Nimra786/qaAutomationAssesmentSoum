import LoginPage from '../pages/loginPage.js';
import MenuPage from '../pages/menuPage.js';

describe('Logout Test', () => {
    const baseUrl = Cypress.config('baseUrl');
    beforeEach(() => {
        cy.visit(baseUrl);
        cy.fixture('user').then((users) => {
            const user = users.users[0];
          cy.get(LoginPage.inpUsername).type(user.username);
          cy.get(LoginPage.inpPassword).type(user.password);
          cy.get(LoginPage.btnLogin).click();
          });
      });
    it.only('Verify on clicking logout User will be logout', () => {
        // assertions
        cy.url().should('eq', baseUrl + 'inventory.html');
    
        // actions
        cy.get(MenuPage.icnMenu).click();
        cy.get(MenuPage.itemMenu).contains('Logout').click()

        // assertions
        cy.url().should('eq', baseUrl);
        cy.get(LoginPage.inpUsername).should('be.visible');
        cy.get(LoginPage.inpPassword).should('be.visible');
        cy.get(LoginPage.inpUsername).should('have.attr', 'placeholder', 'Username');
        cy.get(LoginPage.inpPassword).should('have.attr', 'placeholder', 'Password');
        cy.get(LoginPage.btnLogin).should('be.visible');
        cy.get(LoginPage.btnLogin).should('have.value', 'Login');
    });
});
