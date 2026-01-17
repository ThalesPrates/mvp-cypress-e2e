class ProductsPage {

  goToProducts() {
    cy.contains('Products').click()
  }

  addFirstProductToCart() {
    cy.get('.product-overlay')
      .first()
      .invoke('show')

    cy.contains('Add to cart')
      .first()
      .click()

    cy.contains('Continue Shopping').click()
  }

}

export default new ProductsPage()

