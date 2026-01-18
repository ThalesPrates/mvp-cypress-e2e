describe('Login do usuário', () => {

  it('Deve realizar login com sucesso @smoke', () => {
    cy.fixture('user').then(user => {
      cy.login(user.email, user.password)
      cy.contains('Logged in as').should('be.visible')
    })
  })

  it('Não deve logar com senha inválida',() => {
     cy.fixture('user').then(user => {
      cy.login(user.email, 'senhaincorreta')
      cy.contains('Your email or password is incorrect!').should('be.visible')
    })
  
})


})

