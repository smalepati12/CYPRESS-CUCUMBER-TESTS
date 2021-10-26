import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../page-objects/login.page';
import ProductListPage from '../../page-objects/product-list.page';
import CheckoutPage from '../../page-objects/checkout.page';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
const url = 'https://www.saucedemo.com/ ';

Given('user open saucedemo page', () => {
  cy.visit(url);
});

Then(`user see {string} in the title`, title => {
  cy.title().should('include', title);
});

And('user login as Satandard user', () => {
  cy.fixture('user').then(user => {
    LoginPage.login(user.username, user.password);
  });
});
Then('user see listed items', () => {
  ProductListPage.addToCartButtons.first().should('be.visible');
});

And('user sort the items to high to low', () => {
  cy.scrollTo(0, 0);
  cy.waitFor(ProductListPage.sortProductsButtonSelect);
  ProductListPage.sortProductsButtonSelect.select('Price (high to low)');
});

Then('user select cheapest & costlies items to basket', () => {
  ProductListPage.addToCartButtons.first().click();
  ProductListPage.addToCartButtons.last().click();
});
And('user open my basket', () => {
  cy.scrollTo(0, 0);
  ProductListPage.shoppingCartButton.click();
});

Then('user go to checkout', () => {
  CheckoutPage.checkoutButton.click();
});
And('user enter details and Finish the purchase', () => {
  CheckoutPage.firstNameInput.type('Test');
  CheckoutPage.lastNameInput.type('Checkout');
  CheckoutPage.postalCodeInput.type('EN2 4RD');
  CheckoutPage.continueButton.click();
  CheckoutPage.finishButton.click();
  CheckoutPage.completeHeaderText.should('contain', 'THANK YOU FOR YOUR ORDER');
});
