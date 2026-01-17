import CartPage from '../../pages/CartPage'
import CheckoutPage from '../../pages/CheckoutPage'

describe('Realizar um checkout com sucesso', () => {

  beforeEach(() => {
    cy.fixture('user').then(user => {
      cy.login(user.email, user.password)
    })
    cy.addProductToCart()
  })

  it('Deve finalizar compra com sucesso', () => {
    CartPage.openCart()
    CartPage.proceedToCheckout()

    //cy.contains('Proceed To Checkout').click()

    CheckoutPage.placeOrder()
    CheckoutPage.fillPaymentForm()
    CheckoutPage.confirmPayment()

    cy.contains('Order Placed!').should('be.visible')
    cy.contains('Congratulations! Your order has been confirmed!')
      .should('be.visible')
      cy.screenshot('Sucesso no E2E')

    cy.contains('Logout').click()
    cy.url().should('include', '/login')
  })

})


