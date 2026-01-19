/// <reference types="cypress" />

describe('@smoke Fluxo básico: login e item no carrinho', () => {
  const BASE_URL = 'https://automationexercise.com'

  const USER = {
    // Credenciais fixas apenas para fins de demonstração.
    // Futuramentee, isso pode ser migrado para fixture ou variáveis de ambiente...
    email: 'thales@gmail.com',
    password: 'asdf1573',
  }

  it('deve permitir login e exibir produto no carrinho', () => {
    // Dado que acesso o site
    cy.visit(BASE_URL)

    // Quando realizo login com sucesso
    cy.loginComSucesso(USER.email, USER.password)

    // E adiciono um produto ao carrinho
    cy.adicionarProdutoAoCarrinho()

    // Então devo visualizar o item no carrinho
    cy.abrirCarrinho()
    cy.validarCarrinhoComItens()

    // E posso encerrar a sessão
    cy.contains('Logout').should('be.visible').click()
    cy.url().should('include', '/login')
  })
})
