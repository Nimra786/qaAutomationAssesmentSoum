class OverviewPage {
    // Define locators as class properties
    btnBackHome = '[id="back-to-products"]';

    icnCart = '[class="shopping_cart_link"]';

    lblTitle = '[class="title"]';
    lblThanksForOrder = '[class="complete-header"]';
    lblDescription = '[class="complete-text"]';

    // Methods to interact with elements on the page
    countCartItems = () => {
    cy.get(this.listCart)
      .find(this.itemCart)
      .its('length')
      .then((itemCount) => {
        cy.log(`Number of items in the cart: ${itemCount}`);
    });
  };
}
  export default new OverviewPage();