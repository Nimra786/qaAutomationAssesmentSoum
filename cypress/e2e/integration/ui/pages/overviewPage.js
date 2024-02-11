class OverviewPage {
    // Define locators as class properties
    btnCancel = '[id="cancel"]';
    btnFinish = '[id="finish"]';

    icnCart = '[class="shopping_cart_link"]';

    itemCart = '[class="cart_item"]';

    lblCartItemQuantity = '[class="cart_quantity"]';
    lblInventoryItemDesc = '[class="inventory_item_desc"]';
    lblItemPrice = '[class="item_pricebar"]';

    lblPaymentInfo = '[class="summary_info_label"]';
    lblPaymentValue = '[class="summary_value_label"]';
    lblShippingInfo = '[class="summary_info_label"]';
    lblShippingValue = '[class="summary_value_label"]';
    lblItemTotal = '[class="summary_info_label"]';
    lblPriceTotalValue = '[class="summary_subtotal_label"]';
    lblTaxInfo = '[class="summary_tax_label"]';
    lblTotal = '[class="summary_info_label summary_total_label"]';

    listCart = '[class="cart_list"]';
    
    lnkCartItem = '[id="item_4_title_link"]';

  // Methods to interact with elements on the page
  countCartItems = () => {
        cy.get(this.listCart)
          .find(this.itemCart)
          .its('length')
          .then((itemCount) => {
            cy.log(`Number of items in the cart: ${itemCount}`);
        });
      };

  checkQuantity = (actualQuantity) => {
       cy.get('.cart_quantity').should('have.length', 1).then(($quantityElement) => {
       const quantityText = $quantityElement.text().trim();
        cy.log(`Item quantity: ${quantityText}`);
        expect(parseInt(quantityText)).to.equal(actualQuantity);
    });
  };

  calculateTotal = () => {
    let subtotal = 0;
    let taxAmount = 0;
    cy.get(this.lblItemPrice).each(($itemPrice) => {
    const priceText = $itemPrice.text();
      
    const price = parseFloat(priceText.replace('$', ''));
    subtotal += price;
    });
    cy.get(this.lblTaxInfo).invoke('text').then((taxText) => {
      const taxMatch = taxText.match(/\$\d+\.\d+/);
      if (taxMatch) {
        taxAmount = parseFloat(taxMatch[0].replace('$', ''));
      } else {
        cy.log('Unable to extract valid tax amount from the page.');
      }
    }).then(() => {
      const total = subtotal + taxAmount;
      cy.log(`Subtotal: $${subtotal.toFixed(2)}`);
      cy.log(`Tax: $${taxAmount.toFixed(2)}`);
      cy.log(`Calculated Total amount (including tax): $${total.toFixed(2)}`);
    });
  };
}
  export default new OverviewPage();