/// <reference types="cypress" />
// @ts-check

import { enterprises } from '../fixtures/enterprises_mock_data.json';

describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/enterprises*', {
      fixture: 'enterprises_mock_data',
    });
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="email-input"]').type('testeapple@ioasys.com.br');
    cy.get('[data-testid="password-input"]').type('12341234');
    cy.get('[data-testid="submit-login-button"]').click();
  });

  it('should have a header with logo and search field', () => {
    cy.get('header');

    cy.get('header').find('img');
    cy.get('header').find('[data-testid="search-bar"]');
  });

  it('should have a initial text', () => {
    cy.contains('Clique na busca para iniciar.').should('exist');
  });

  it('should expand the search bar and disappear the initial text when clicking the search button', () => {
    cy.get('[data-testid="search-bar-button"]').click();

    cy.get('[data-testid="search-bar"]').should('have.css', 'max-width', '95%');
    cy.contains('Clique na busca para iniciar.').should('not.exist');
  });

  it('should be possible to cancel the search', () => {
    cy.get('[data-testid="search-bar-button"]').click();
    cy.get('[data-testid="cancel-search"]').click();

    cy.get('[data-testid="search-bar"]').should(
      'have.css',
      'max-width',
      '60px',
    );
  });

  it.only('should be possible to see a card with some data from an existing company when searching', () => {
    cy.get('[data-testid="search-bar-button"]').click();
    cy.get('[data-testid="search-input"]').type(enterprises[0].enterprise_name);

    cy.get('[data-testid="enterprise-card"]');
    cy.get('[data-testid="enterprise-card"]')
      .find('img')
      .should(
        'have.attr',
        'src',
        'https://empresas.ioasys.com.br' + enterprises[0].photo,
      );
    cy.get('[data-testid="enterprise-card"]')
      .find('h3')
      .should('have.text', enterprises[0].enterprise_name);
    cy.get('[data-testid="enterprise-card"]')
      .find('p')
      .should('have.text', enterprises[0].enterprise_type.enterprise_type_name);
    cy.get('[data-testid="enterprise-card"]')
      .find('span')
      .should('have.text', `${enterprises[0].city}, ${enterprises[0].country}`);
  });
});

export {};
