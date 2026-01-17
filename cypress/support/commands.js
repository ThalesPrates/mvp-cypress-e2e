import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'

Cypress.Commands.add('login', (email, password) => {
  LoginPage.visit()
  LoginPage.fillEmail(email)
  LoginPage.fillPassword(password)
  LoginPage.submit()
  //cy.screenshot('01-login-success')
})

Cypress.Commands.add('addProductToCart', () => {
  ProductsPage.goToProducts()
  ProductsPage.addFirstProductToCart()
})
