/// <reference types="cypress" />

/**
 * CRUD simples usando o próprio AutomationExercise:
 */

describe('@crud Cadastro de conta e remoção @e2e', () => {
  const BASE_URL = 'https://automationexercise.com';

  // E-mail único para evitar conflito com contas já existentes
  const uniqueEmail = `qa.mvp+${Date.now()}@example.com`;

  const user = {
    name: 'Thales QA',
    email: uniqueEmail,
    password: 'asdf1573',
    firstName: 'Thales',
    lastName: 'Prates',
    address: 'Rua dos testes, 001',
    country: 'India',
    state: 'Minas',
    city: 'Pavao',
    zip: '12345',
    mobile: '33989999999',
  };

  it('deve criar uma conta, validar login e excluir a conta ao final', () => {
    // C: Create (início do cadastro)
    cy.visit(BASE_URL);
    cy.contains('Signup / Login').should('be.visible').click();
    cy.url().should('include', '/login');

    cy.get('[data-qa="signup-name"]').should('be.visible').type(user.name);
    cy.get('[data-qa="signup-email"]').should('be.visible').type(user.email);
    cy.get('[data-qa="signup-button"]').click();

    // U: Update (preenche dados do cadastro que ficam registrados)
    cy.contains('Enter Account Information').should('be.visible');

    cy.get('#id_gender1').check(); // Mr.
    cy.get('[data-qa="password"]').type(user.password, { log: false });

    cy.get('[data-qa="first_name"]').type(user.firstName);
    cy.get('[data-qa="last_name"]').type(user.lastName);
    cy.get('[data-qa="address"]').type(user.address);

    cy.get('[data-qa="country"]').select(user.country);
    cy.get('[data-qa="state"]').type(user.state);
    cy.get('[data-qa="city"]').type(user.city);
    cy.get('[data-qa="zipcode"]').type(user.zip);
    cy.get('[data-qa="mobile_number"]').type(user.mobile);

    cy.get('[data-qa="create-account"]').click();

    // R: Read (confirmações de sucesso do cadastro)
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();

    // Algumas vezes aparece um modal/ads; o site pode redirecionar mesmo assim.
    cy.contains('Logged in as').should('be.visible');

    // D: Delete (remove a conta criada para manter o ambiente limpo)
    cy.contains('Delete Account').should('be.visible').click();
    cy.contains('Account Deleted!').should('be.visible');

    // Finaliza o fluxo
    cy.get('[data-qa="continue-button"]').click();
  });
});
