import LoginPage from '../../pages/LoginPage'
import ProductsPage from '../../pages/ProductsPage'
import CartPage from '../../pages/CartPage'
import CheckoutPage from '../../pages/CheckoutPage'

describe('Checkout completo com sucesso', () => {

  it('Deve finalizar compra com sucesso', () => {

    cy.fixture('user').then(user => {

      // Login
      cy.visit('/')
      cy.contains('Signup / Login').click()
      LoginPage.login(user.email, user.password)

      cy.contains('Logged in as').should('be.visible')

      // Produto
      ProductsPage.goToProducts()
      ProductsPage.addFirstProduct()

      // Checkout
      CartPage.goToCart()
      CartPage.proceedToCheckout()
      cy.contains('Proceed To Checkout').click()

      // Pagamento
      CheckoutPage.placeOrder()
      CheckoutPage.fillPayment()
      CheckoutPage.confirmOrder()

      // Validação de sucesso
      cy.contains('Order Placed!').should('be.visible')
      cy.contains('Congratulations! Your order has been confirmed!')
        .should('be.visible')

      // Logout
      cy.contains('Logout').click()
      cy.url().should('include', '/login')
    })

  })

})
