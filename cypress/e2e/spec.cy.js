describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')
 
    // Vai para Login
    cy.contains('Signup / Login').click()

    // Login
    cy.get('[data-qa="login-email"]').type('thales@gmail.com')
    cy.get('[data-qa="login-password"]').type('asdf1573')
    cy.get('[data-qa="login-button"]').click()

    // Valida login com sucesso
    cy.contains('Logged in as').should('be.visible')

    // Navega para produtos
    cy.contains('Products').click()

    // Adiciona primeiro produto ao carrinho
    cy.get('.product-overlay')
      .first()
      .invoke('show')

    cy.contains('Add to cart').first().click()

    // Fecha modal
    cy.contains('Continue Shopping').click()

    // Vai para o carrinho
    cy.contains('Cart').click()

    // Validação do item no carrinho
    cy.get('.cart_info').should('be.visible')
    cy.get('.cart_description').should('have.length.at.least', 1)

    // Logout
    cy.contains('Logout').click()

    // Valida retorno para login
    cy.url().should('include', '/login')
  })

})


