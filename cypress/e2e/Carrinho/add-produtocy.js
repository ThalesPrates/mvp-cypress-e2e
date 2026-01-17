describe('Carrinho - Adicionar produto',  { tags: ['@e2e'] }, () => {

  beforeEach(() => {
    cy.fixture('user').then(user => {
      cy.login(user.email, user.password)
    })
  })

  it('Deve adicionar produto ao carrinho', () => {
    cy.addProductToCart()
    cy.contains('Cart').click()
    cy.get('.cart_description')
      .should('have.length.at.least', 1)
  })

})

