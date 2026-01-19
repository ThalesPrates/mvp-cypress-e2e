import CartPage from '../../pages/CartPage'
import CheckoutPage from '../../pages/CheckoutPage'

describe('Realizar um checkout com sucesso @e2e', () => {

  beforeEach(() => {
    cy.fixture('user').then(user => {
      cy.loginComSucesso(user.email, user.password)
    })
    cy.adicionarProdutoAoCarrinho()
  })

  it('Deve finalizar compra com sucesso', () => {
    CartPage.openCart()
    CartPage.proceedToCheckout()

    //cy.contains('Proceed To Checkout').click()

    CheckoutPage.iniciarFinalizacaoDoPedido()
    CheckoutPage.preencherDadosDePagamento()
    CheckoutPage.confirmarPagamento()

    cy.contains('Order Placed!').should('be.visible')
    cy.contains('Congratulations! Your order has been confirmed!')
      .should('be.visible')
      cy.screenshot('Sucesso no E2E') //próximo passo melhorar nome arquivo

    cy.contains('Logout').click()
    cy.url().should('include', '/login')
  })

 // it('nao deveria rodar no smoke', () => { throw new Error('RODOU ERRADO') })


})


