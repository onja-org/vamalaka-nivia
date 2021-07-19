/// <reference types="cypress" />

describe('Home Screen', () => {

  beforeEach('visits site', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Displays the Onboarding Role Selection Component', () => {
    cy.contains('Discover amazing products and profit from a truly fair market')
  })

  it('has onboarding links', () => {
    cy.visit('/')
    cy.contains("a")
  })
  it('navigates to signIn without reload', () => {
    cy.visit('/signin')
    cy.contains('a')
  });
  it('navigates to signUp without reload', () => {
    cy.visit('/signup')
    cy.contains('a')
    cy.contains('sign up')
  });
  it('navigates to transaction without reload', () => {
    cy.visit('/transactions')
    cy.contains('a')
    cy.contains('transaction')
  });
  it('navigates to not found without reload', () => {
    cy.visit('//')
    cy.contains('a')
  });
})
