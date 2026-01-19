class CartPage {
  abrirCarrinho() {
    cy.contains('Cart').should('be.visible').click()
    cy.url().should('include', '/view_cart')
  }

  avancarParaCheckout() {
    cy.contains('Proceed To Checkout').should('be.visible').click()
  }

  // Aliases para compatibilidade (seus specs chamam openCart/proceedToCheckout)
  openCart() {
    this.abrirCarrinho()
  }

  proceedToCheckout() {
    this.avancarParaCheckout()
  }
}

export default new CartPage()


