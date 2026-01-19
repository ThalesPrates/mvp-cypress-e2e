/// <reference types="cypress" />

describe('Login do usuário @login', () => {

  beforeEach(() => {
        cy.visit('https://automationexercise.com/')
  })

  it('Deve realizar login com sucesso', () => {
    cy.fixture('user').then(user => {
      cy.loginComSucesso(user.email, user.password)
    })
  })

  it('Não deve logar com senha inválida', () => {
    cy.fixture('user').then(user => {
      cy.tentarLogin(user.email, 'senhaincorreta')
      cy.contains('Your email or password is incorrect!')
        .should('be.visible')
    })
  })

})

