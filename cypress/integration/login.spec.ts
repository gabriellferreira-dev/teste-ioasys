/// <reference types="cypress" />
// @ts-check

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should have all components according to the prototype', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="ioasys-logo"]');
    cy.get('[data-testid="welcome-text"]');
    cy.get('[data-testid="subtext"]');
    cy.get('[data-testid="email-input"]');
    cy.get('[data-testid="password-input"]');
    cy.get('[data-testid="submit-login-button"]');
  });

  it('the inputs are filled in correctly', () => {
    cy.get('[data-testid="email-input"]').type('email@email.com');
    cy.get('[data-testid="email-input"]').should(
      'have.value',
      'email@email.com',
    );
    cy.get('[data-testid="password-input"]').type('123456');
    cy.get('[data-testid="password-input"]').should('have.value', '123456');
  });

  it('by clicking the button, you can see or hide the password', () => {
    cy.get('[data-testid="email-input"]').type('email@email.com');
    cy.get('[data-testid="password-input"]').type('123456');
    cy.get('[data-testid="password-visibility"]').click();
    cy.get('[data-testid="password-input"]')
      .invoke('attr', 'type')
      .should('eq', 'text');
    cy.get('[data-testid="password-visibility"]').click();
    cy.get('[data-testid="password-input"]')
      .invoke('attr', 'type')
      .should('eq', 'password');
  });

  it('should show a loading when logging in', () => {
    cy.get('[data-testid="email-input"]').type('testeapple@ioasys.com.br');
    cy.get('[data-testid="password-input"]').type('12341234');
    cy.get('[data-testid="submit-login-button"]').click();

    cy.get('[data-testid="loading-screen"]');
  });

  it('should an error message appears when entering some data wrong', () => {
    cy.get('[data-testid="email-input"]').type('emailerrado@ioasys.com.br');
    cy.get('[data-testid="password-input"]').type('12341234');
    cy.get('[data-testid="submit-login-button"]').click();

    cy.get('*[class="error-message"]');
    cy.get('*[class="error-message"]').should(
      'have.text',
      'Credenciais informadas são inválidas, tente novamente.',
    );
  });

  it('should successful login occur when entering the correct data', () => {
    cy.get('[data-testid="email-input"]').type('testeapple@ioasys.com.br');
    cy.get('[data-testid="password-input"]').type('12341234');
    cy.get('[data-testid="submit-login-button"]').click();

    cy.location('pathname').should('eq', '/');
  });
});

export {};
