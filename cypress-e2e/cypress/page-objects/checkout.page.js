class CheckoutPage {
  get checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }
  get firstNameInput() {
    return cy.get('[data-test="firstName"]');
  }

  get lastNameInput() {
    return cy.get('[data-test="lastName"]');
  }

  get postalCodeInput() {
    return cy.get('[data-test="postalCode"]');
  }
  get finishButton() {
    return cy.get('[data-test="finish"]');
  }

  get completeHeaderText() {
    return cy.get('h2.complete-header');
  }
  get continueButton() {
    return cy.get('[data-test="continue"]');
  }

  get checkoutTitle() {
    return cy.get('.title');
  }
}

export default new CheckoutPage();
