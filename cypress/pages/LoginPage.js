class LoginPage {

  visit() {
    cy.visit('/')
    cy.contains('Signup / Login').click()
  }

  fillEmail(email) {
    cy.get('[data-qa="login-email"]').type(email)
  }

  fillPassword(password) {
    cy.get('[data-qa="login-password"]').type(password)
  }

  submit() {
    cy.get('[data-qa="login-button"]').click()
    
  }

}

export default new LoginPage()

