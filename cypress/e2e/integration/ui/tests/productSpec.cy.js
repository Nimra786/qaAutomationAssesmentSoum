import LoginPage from '../pages/loginPage';
import MenuPage from '../pages/menuPage';
import ProductPage from '../pages/productPage';

describe('Product Test', () => {
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

    it('Intial Presentation of Product Page', () => {
        // assertions        
        cy.url().should('eq', baseUrl + 'inventory.html'); 
        cy.get(ProductPage.icnCart).should('be.visible');
        cy.get(ProductPage.icnMenu).should('be.visible');
        cy.get(ProductPage.lblTitle).should('be.visible');
        cy.get(ProductPage.drpSort).should('be.visible');
        ProductPage.countInventoryItems();

        ProductPage.verifyInventoryItemName('Sauce Labs Backpack');
        ProductPage.verifyInventoryItemDescription('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
        ProductPage.verifyInventoryItemPrice('$29.99');
        cy.get(ProductPage.btnAddToCartBackPack).should('be.visible');

        ProductPage.verifyInventoryItemName('Sauce Labs Bike Light');
        ProductPage.verifyInventoryItemDescription('A red light isn'+'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.')
        ProductPage.verifyInventoryItemPrice('$9.99');
        cy.get(ProductPage.btnAddToCartBikeLight).should('be.visible');

        ProductPage.verifyInventoryItemName('Sauce Labs Bolt T-Shirt');
        ProductPage.verifyInventoryItemDescription('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.')
        ProductPage.verifyInventoryItemPrice('$15.99');
        cy.get(ProductPage.btnAddToCartTShirt).should('be.visible');

        ProductPage.verifyInventoryItemName('Sauce Labs Fleece Jacket');
        ProductPage.verifyInventoryItemDescription('It'+'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.')
        ProductPage.verifyInventoryItemPrice('$49.99');
        cy.get(ProductPage.btnAddToCartJacket).should('be.visible');

        ProductPage.verifyInventoryItemName('Sauce Labs Onesie');
        ProductPage.verifyInventoryItemDescription('Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won'+'t unravel.')
        ProductPage.verifyInventoryItemPrice('$7.99');
        cy.get(ProductPage.btnAddToCartOnesie).should('be.visible');

        ProductPage.verifyInventoryItemName('Test.allTheThings() T-Shirt (Red)');
        ProductPage.verifyInventoryItemDescription('This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.')
        ProductPage.verifyInventoryItemPrice('$15.99');
        cy.get(ProductPage.btnAddToCartRedTShirt).should('be.visible');
    });

    it('Verify that the product page displays a list of available products', () => {
        // assertions        
        cy.url().should('eq', baseUrl + 'inventory.html'); 
        ProductPage.countInventoryItems();

    });

    it('Verify Item Sorted in Name [A to Z]', () => {
        // assertions
        cy.url().should('eq', baseUrl + 'inventory.html');
        cy.get(ProductPage.drpSort).should('exist');
        cy.get(ProductPage.drpSort).contains('Name (A to Z)');
        ProductPage.verifyAlphabaticalSortAtoZ();
    });

    it('Verify Item Sorted in Name [Z to A]', () => {
        // assertions
        cy.url().should('eq', baseUrl + 'inventory.html');
        cy.get(ProductPage.drpSort).should('exist');
        cy.get(ProductPage.drpSort).contains('Name (A to Z)');

        // actions
        cy.get(ProductPage.drpSort).select('Name (Z to A)');

        // assertions
        cy.get(ProductPage.drpSort).contains('Name (Z to A)');
        ProductPage.verifyAlphabaticalSortZtoA();
    });

    it('Verify Item Sorted in Price [low to high]', () => {
        // assertions
        cy.url().should('eq', baseUrl + 'inventory.html');
        cy.get(ProductPage.drpSort).should('exist');
        cy.get(ProductPage.drpSort).contains('Name (A to Z)');

        // actions
        cy.get(ProductPage.drpSort).select('Price (low to high)');

        // assertions
        cy.get(ProductPage.drpSort).contains('Price (low to high)');
        ProductPage.verifyAscendingSort();
    });

    it('Verify Item Sorted in Price [high to low]', () => {
        // assertions
        cy.url().should('eq', baseUrl + 'inventory.html');
        cy.get(ProductPage.drpSort).should('exist');
        cy.get(ProductPage.drpSort).contains('Name (A to Z)');

        // actions
        cy.get(ProductPage.drpSort).select('Price (high to low)');

        // assertions
        cy.get(ProductPage.drpSort).contains('Price (high to low)');
        ProductPage.verifyDescendingSort();
    });

    it('Verify on clicking All items it should stay on product page', () => {
        // assertions
        cy.url().should('eq', baseUrl + 'inventory.html');
    
        // actions
        cy.get(MenuPage.icnMenu).click();
        cy.get(MenuPage.itemMenu).contains('All Items').click()

        // assertions
        cy.url().should('eq', baseUrl + 'inventory.html');
    });
});
