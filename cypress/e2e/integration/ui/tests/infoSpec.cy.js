import CartPage from '../pages/cartPage';
import { faker } from '@faker-js/faker';
import InfoPage from '../pages/infoPage';
import LoginPage from '../pages/loginPage';

describe('Info Test', () => {
    const baseUrl = Cypress.config('baseUrl');
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const zipCode = faker.address.zipCode();

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.fixture('user').then((users) => {
            const user = users.users[0];
          cy.get(LoginPage.inpUsername).type(user.username);
          cy.get(LoginPage.inpPassword).type(user.password);
          cy.get(LoginPage.btnLogin).click();
          });
      });

      it('Initial Presenatation of Info Page', () => {
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
        cy.get(InfoPage.inpFirstName).should('be.visible');
        cy.get(InfoPage.inpLastName).should('be.visible');
        cy.get(InfoPage.inpZipPostalCode).should('be.visible');
        cy.get(InfoPage.btnContinue).should('be.visible');
        cy.get(InfoPage.btnCancel).should('be.visible');
    });

    it('Verify First name is required', () => {
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
      cy.get(InfoPage.inpLastName).type(lastName);
      cy.get(InfoPage.inpZipPostalCode).type(zipCode);
      cy.get(InfoPage.btnContinue).click();
      
      // assertions
      cy.get(InfoPage.errMessage).contains('Error: First Name is required');
    });

    it('Verify Last name is required', () => {
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
      cy.get(InfoPage.inpFirstName).type(firstName);
      cy.get(InfoPage.inpZipPostalCode).type(zipCode);
      cy.get(InfoPage.btnContinue).click();
      
      // assertions
      cy.get(InfoPage.errMessage).contains('Error: Last Name is required');
    });

    it('Verify Postal Code is required', () => {
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
      cy.get(InfoPage.inpFirstName).type(firstName);
      cy.get(InfoPage.inpLastName).type(lastName);
      cy.get(InfoPage.btnContinue).click();
      
      // assertions
      cy.get(InfoPage.errMessage).contains('Error: Postal Code is required');
    });

    it('Verify User can naviagte to order confirmation page after adding items in cart', () => {
      
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
      cy.get(InfoPage.inpFirstName).type(firstName);
      cy.get(InfoPage.inpLastName).type(lastName);
      cy.get(InfoPage.inpZipPostalCode).type(zipCode);
      cy.get(InfoPage.btnContinue).click();
      
      // assertions
      cy.url().should('eq', baseUrl + 'checkout-step-two.html'); 
    });
});
