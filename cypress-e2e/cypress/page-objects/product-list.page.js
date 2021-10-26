class ProductsListPage {
  get sortProductsButton() {
    return cy.get('.active_option');
  }
  get sortProductsButtonSelect() {
    return cy.get('[data-test="product_sort_container"]');
  }

  get addToCartButtons() {
    return cy.get('button[data-test*="add-to-cart"]');
  }

  get shoppingCartButton() {
    return cy.get('.shopping_cart_link');
  }
}

export default new ProductsListPage();
