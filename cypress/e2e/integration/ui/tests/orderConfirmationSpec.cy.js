import CartPage from '../pages/cartPage';
import InfoPage from '../pages/infoPage';
import LoginPage from '../pages/loginPage';
import ProductPage from '../pages/productPage';
import OverViewPage from '../pages/overViewPage';
import OrderConfirmationPage from '../pages/orderConfirmationPage';

describe('Order Confirmation Page Test', () => {
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

    it('Initial Order Confirmation Page Presentation', () => {
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
        cy.get(InfoPage.inpFirstName).type('Test');
        cy.get(InfoPage.inpLastName).type('1223');
        cy.get(InfoPage.inpZipPostalCode).type('65677');
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

    it('Verify on clicking back home button it naviagets to login page', () => {
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
        cy.get(InfoPage.inpFirstName).type('Test');
        cy.get(InfoPage.inpLastName).type('1223');
        cy.get(InfoPage.inpZipPostalCode).type('65677');
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
    
       // actions
       cy.get(OrderConfirmationPage.btnBackHome).click();
   
       // assertions
       cy.url().should('eq', baseUrl + 'inventory.html'); 
       cy.get(ProductPage.icnCart).should('be.visible');
    });
});
