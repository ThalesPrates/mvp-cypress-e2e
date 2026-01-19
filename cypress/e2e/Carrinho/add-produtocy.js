import CartPage from '../../pages/CartPage'

describe('Carrinho - Adicionar produto', () => {

  beforeEach(() => {
    cy.fixture('user').then(user => {
      cy.loginComSucesso(user.email, user.password)
    })
  })

  it('Deve adicionar produto ao carrinho', () => {
    cy.adicionarProdutoAoCarrinho()

    CartPage.abrirCarrinho()
    CartPage.validarQueHaItensNoCarrinho()
  })

})


