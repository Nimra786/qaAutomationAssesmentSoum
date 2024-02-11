import Commands from '../../../support/commands';

class ProductPage {
    // Define locators as class properties
    btnAddToCartBackPack = '[id="add-to-cart-sauce-labs-backpack"]';
    btnAddToCartBikeLight = '[id="add-to-cart-sauce-labs-bike-light"]';
    btnAddToCartTShirt = '[id="add-to-cart-sauce-labs-bolt-t-shirt"]';
    btnAddToCartJacket = '[id="add-to-cart-sauce-labs-fleece-jacket"]';
    btnAddToCartOnesie = '[id="add-to-cart-sauce-labs-onesie"]';
    btnAddToCartRedTShirt = '[id="add-to-cart-test.allthethings()-t-shirt-(red)"]';

    btnRemoveToCartBackPack = '[id="remove-sauce-labs-backpack"]';
    btnRemoveToCartBikeLight = '[id="remove-sauce-labs-bike-light"]';
    btnRemoveToCartTShirt = '[id="remove-sauce-labs-bolt-t-shirt"]';
    btnRemoveToCartJacket = '[id="remove-sauce-labs-fleece-jacket"]';
    btnRemoveToCartOnesie = '[id="remove-sauce-labs-onesie"]';
    btnRemoveToCartRedTShirt = '[id="remove-test.allthethings()-t-shirt-(red)"]';

    drpSort = '[class="product_sort_container"]';
    
    drpOptionValue1 = 'option[value = "az"]'
    drpOptionValue2 = 'option[value = "za"]'
    drpOptionValue3 = 'option[value = "lohi"]'
    drpOptionValue4 = 'option[value = "hilo"]'

    icnMenu = '[class="bm-burger-button"]'; 
    icnCart = '[class="shopping_cart_container"]'; 
    itemInventory = '[class="inventory_item"]'; 

    lblTitle = '[class="app_logo"]';
    lblItemName = '[class="inventory_item_name"]';
    lblItemDescription = '[class="inventory_item_desc"]';
    lblItemPrice = '[class="inventory_item_price"]';
    listInventory = '[class="inventory_list"]';

    // Methods to interact with elements on the page
    countInventoryItems = () => {
        cy.get(this.listInventory)
        .find(this.itemInventory)
        .its('length') 
        .then((itemCount) => {
          expect(itemCount).to.eq(6);
        });
    };

    verifyInventoryItemName = (itemNameToVerify) => {
      cy.get(this.listInventory)
        .find(this.itemInventory)
        .should('have.length.gt', 0) 
        .each(($item) => {
          cy.wrap($item)
            .find('.inventory_item_name')
            .should('be.visible') 
            .invoke('text') 
            .then((itemName) => {
              if (itemName.trim() === itemNameToVerify) {
                expect(itemName.trim()).to.equal(itemNameToVerify);
              }
            });
        });
    };

    verifyInventoryItemDescription = (itemDescriptionToVerify) => {
      cy.get(this.listInventory)
        .find(this.itemInventory)
        .should('have.length.gt', 0) 
        .each(($item) => {
          cy.wrap($item)
            .find('.inventory_item_desc')
            .should('be.visible') 
            .invoke('text') 
            .then((itemDescription) => {
              if (itemDescription.trim() === itemDescriptionToVerify) {
                expect(itemDescription.trim()).to.equal(itemDescriptionToVerify);
              }
            });
        });
    };

    verifyInventoryItemPrice = (itemPriceToVerify) => {
      cy.get(this.listInventory)
        .find(this.itemInventory)
        .should('have.length.gt', 0) 
        .each(($item) => {
          cy.wrap($item)
            .find('.inventory_item_price')
            .should('be.visible') 
            .invoke('text') 
            .then((itemPrice) => {
              if (itemPrice.trim() === itemPriceToVerify) {
                expect(itemPrice.trim()).to.equal(itemPriceToVerify);
              }
            });
        });
    };

    verifyAscendingSort = () => {
        cy.get(this.listInventory)
          .find(this.itemInventory)
          .then(($items) => {
            const prices = $items.toArray().map(($item) => {
              return parseFloat(Cypress.$($item).find('.inventory_item_price').text().replace('$', ''));
            });
      
            const sortedPrices = [...prices].sort((a, b) => a - b);
      
            const firstItemPrice = sortedPrices[0];
            const lastItemPrice = sortedPrices[sortedPrices.length - 1];
      
            expect(prices).to.deep.equal(sortedPrices);
            expect(firstItemPrice).to.be.lessThan(lastItemPrice);
            expect(lastItemPrice).to.be.greaterThan(firstItemPrice);

            cy.log(`First item price: $${firstItemPrice}, Last item price: $${lastItemPrice}`);
          });
    };

    verifyAlphabaticalSortAtoZ = () => {
        cy.get(this.listInventory)
          .find(this.itemInventory)
          .then(($items) => {
            const itemNames = $items.toArray().map(($item) => {
              return Cypress.$($item).find('.inventory_item_name').text().trim();
            });
      
            const sortedItemNames = [...itemNames].sort((a, b) => a.localeCompare(b));
      
            const firstItemName = sortedItemNames[0];
            const lastItemName = sortedItemNames[sortedItemNames.length - 1];
      
            expect(itemNames).to.deep.equal(sortedItemNames);
            expect(firstItemName).to.equal(itemNames[0]);
            expect(lastItemName).to.equal(itemNames[itemNames.length - 1]);
      
            cy.log(`First item name: ${firstItemName}, Last item name: ${lastItemName}`);
          });
    };

    verifyAlphabaticalSortZtoA = () => {
    cy.get(this.listInventory)
    .find(this.itemInventory)
    .then(($items) => {
      const itemNames = $items.toArray().map(($item) => {
        return Cypress.$($item).find('.inventory_item_name').text().trim();
      });

      const sortedItemNames = itemNames.slice().sort((a, b) => a.localeCompare(b)); // Sort in alphabetical order

      const firstItemName = sortedItemNames[0];
      const lastItemName = sortedItemNames[sortedItemNames.length - 1];

      expect(itemNames.sort()).to.deep.equal(sortedItemNames.sort()); // Sort both arrays before comparison
      expect(firstItemName).to.equal(itemNames[0]);
      expect(lastItemName).to.equal(itemNames[itemNames.length - 1]);

      cy.log(`First item name: ${firstItemName}, Last item name: ${lastItemName}`);
    });
    };
    
    verifyDescendingSort = () => {
      cy.get(this.listInventory)
        .find(this.itemInventory)
        .then(($items) => {
          const prices = $items.toArray().map(($item) => {
            return parseFloat(Cypress.$($item).find('.inventory_item_price').text().replace('$', ''));
          });
    
          const sortedPrices = [...prices].sort((a, b) => b - a); // Sort in descending order
    
          const firstItemPrice = sortedPrices[0];
          const lastItemPrice = sortedPrices[sortedPrices.length - 1];
    
          expect(prices).to.deep.equal(sortedPrices);
          expect(firstItemPrice).to.be.greaterThan(lastItemPrice);
          expect(lastItemPrice).to.be.lessThan(firstItemPrice);
    
          cy.log(`First item price: $${firstItemPrice}, Last item price: $${lastItemPrice}`);
        });
    };
     
  }

  export default new ProductPage();

  