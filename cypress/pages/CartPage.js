class CartPage {

  openCart() {
    cy.contains('Cart').click()
  }

  proceedToCheckout() {
    cy.contains('Proceed To Checkout').click()
  }

}

export default new CartPage()

