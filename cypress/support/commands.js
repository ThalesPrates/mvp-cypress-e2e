import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'

Cypress.Commands.add('tentarLogin', (email, password) => {
  LoginPage.acessarTelaDeLogin()
  LoginPage.realizarLogin(email, password)
})

Cypress.Commands.add('loginComSucesso', (email, password) => {
  cy.tentarLogin(email, password)
  LoginPage.validarLoginComSucesso()
  //cy.screenshot('01-login-success')
})

Cypress.Commands.add('adicionarProdutoAoCarrinho', () => {
  ProductsPage.goToProducts()
  ProductsPage.addFirstProductToCart()
})

Cypress.Commands.add('abrirCarrinho', () => {
  CartPage.openCart()
})

Cypress.Commands.add('validarCarrinhoComItens', () => {
  cy.get('.cart_description').should('have.length.at.least', 1)
})

