import CartPage from '../pages/cartPage';
import { faker } from '@faker-js/faker';
import InfoPage from '../pages/infoPage';
import LoginPage from '../pages/loginPage';
import OrderConfirmationPage from '../pages/orderConfirmationPage';
import OverViewPage from '../pages/overViewPage';

describe('Product Overview page Tests', () => {
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

    it('Initial Presenatation of Product Overview Page', () => {
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
        cy.get(CartPage.icnItemCount).should('exist');
        OverViewPage.countCartItems();
        cy.get(OverViewPage.itemCart).should('be.visible');

        OverViewPage.checkQuantity(1);
        OverViewPage.calculateTotal();

        cy.get(OverViewPage.btnCancel).should('be.visible');
        cy.get(OverViewPage.btnFinish).should('be.visible');
    });

    it('Verify User confirm order after clicking finish button', () => {
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
     cy.get(CartPage.icnItemCount).should('exist');
     OverViewPage.countCartItems();
     OverViewPage.checkQuantity(1);
     OverViewPage.calculateTotal();

    // actions
    cy.get(OverViewPage.btnFinish).click();

    // assertions
    cy.url().should('eq', baseUrl + 'checkout-complete.html');    
    cy.get(CartPage.icnItemCount).should('not.exist');
    cy.get(OrderConfirmationPage.btnBackHome).should('be.visible');
    cy.get(OrderConfirmationPage.lblThanksForOrder).should('have.text','Thank you for your order!');
    cy.get(OrderConfirmationPage.lblDescription).should('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    });
});
