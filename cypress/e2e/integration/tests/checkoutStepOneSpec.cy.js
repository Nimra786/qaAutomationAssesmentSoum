import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutStepOnePage';
import LoginPage from '../pages/loginPage';

describe('Checkout Step One Test', () => {
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

      it('Initial Presenatation of Checkout Page', () => {
        // assertions
        cy.url().should('eq', baseUrl + 'inventory.html');
        cy.get(CartPage.icnItemCount).should('not.exist');

        // actions
        cy.get(CartPage.btnAddToCartBikeLight).click();
        cy.get(CartPage.btnCart).click();

        // assertions
        cy.url().should('eq', baseUrl + 'cart.html');
        
        // actions
        cy.get(CartPage.btnCheckout).click();

        // assertions
        cy.url().should('eq', baseUrl + 'checkout-step-one.html'); 
        cy.get(CheckoutPage.inpFirstName).should('be.visible');
        cy.get(CheckoutPage.inpLastName).should('be.visible');
        cy.get(CheckoutPage.inpZipPostalCode).should('be.visible');
        cy.get(CheckoutPage.btnContinue).should('be.visible');
        cy.get(CheckoutPage.btnCancel).should('be.visible');
    });

    it.only('Verify User can naviagte to checkout after adding items in cart', () => {
      // assertions
      cy.url().should('eq', baseUrl + 'inventory.html');
      cy.get(CartPage.icnItemCount).should('not.exist');

      // actions
      cy.get(CartPage.btnAddToCartBikeLight).click();
      cy.get(CartPage.btnCart).click();

      // assertions
      cy.url().should('eq', baseUrl + 'cart.html');
      
      // actions
      cy.get(CartPage.btnCheckout).click();

      // assertions
      cy.url().should('eq', baseUrl + 'checkout-step-one.html'); 

      // actions
      cy.get(CheckoutPage.inpFirstName).type('Test');
      cy.get(CheckoutPage.inpLastName).type('123');
      cy.get(CheckoutPage.inpZipPostalCode).type('65478');

      // assertions
      cy.url().should('eq', baseUrl + 'checkout-step-two.html'); 

    });
});
