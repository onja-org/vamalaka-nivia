/// <reference types="cypress" />

describe('Home Screen', () => {
  beforeEach('visits site', () => {
    cy.visit('/')
  })
  it('Displays the Onboarding Role Selection Component', () => {
    cy.contains('Discover amazing products and profit from a truly fair market')
  })
})
