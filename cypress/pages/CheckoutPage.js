class CheckoutPage {

  placeOrder() {
    cy.contains('Place Order').click()
  }

  fillPaymentForm() {
    cy.get('[data-qa="name-on-card"]').type('Teste de QA')
    cy.get('[data-qa="card-number"]').type('4111671561113411')
    cy.get('[data-qa="cvc"]').type('123')
    cy.get('[data-qa="expiry-month"]').type('11')
    cy.get('[data-qa="expiry-year"]').type('2027')
  }

  confirmPayment() {
    cy.get('[data-qa="pay-button"]').click()
  }

}

export default new CheckoutPage()

