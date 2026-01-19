class CheckoutPage {

  iniciarFinalizacaoDoPedido() {
    cy.contains('Place Order').should('be.visible').click()
  }

  preencherDadosDePagamento() {
    // dados fictícios para simulação (MVP)
    cy.get('[data-qa="name-on-card"]').type('Teste de QA')
    cy.get('[data-qa="card-number"]').type('4111671561113411')
    cy.get('[data-qa="cvc"]').type('123')
    cy.get('[data-qa="expiry-month"]').type('11')
    cy.get('[data-qa="expiry-year"]').type('2027')
  }

  confirmarPagamento() {
    cy.get('[data-qa="pay-button"]').should('be.visible').click()
  }

  concluirCompra() {
    this.iniciarFinalizacaoDoPedido()
    this.preencherDadosDePagamento()
    this.confirmarPagamento()
  }

  // Aliases temporários (para não quebrar specs antigos)
  placeOrder() { this.iniciarFinalizacaoDoPedido() }
  fillPaymentForm() { this.preencherDadosDePagamento() }
  confirmPayment() { this.confirmarPagamento() }
}

export default new CheckoutPage()
