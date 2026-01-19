class LoginPage {
  acessarTelaDeLogin() {
    cy.visit('/')
    cy.contains('Signup / Login').should('be.visible').click()
    cy.url().should('include', '/login')
  }

  informarEmail(email) {
    cy.get('[data-qa="login-email"]').should('be.visible').clear().type(email)
  }

  informarSenha(password) {
    cy.get('[data-qa="login-password"]').should('be.visible').clear().type(password, { log: false })
  }

  confirmarLogin() {
    cy.get('[data-qa="login-button"]').should('be.visible').click()
  }

  realizarLogin(email, password) {
    this.informarEmail(email)
    this.informarSenha(password)
    this.confirmarLogin()
  }

  validarLoginComSucesso() {
    cy.contains('Logged in as').should('be.visible')
  }


  visit() {
    this.acessarTelaDeLogin()
  }

  fillEmail(email) {
    this.informarEmail(email)
  }

  fillPassword(password) {
    this.informarSenha(password)
  }

  submit() {
    this.confirmarLogin()
  }
}

export default new LoginPage()


