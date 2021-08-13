/// <reference types="cypress" />
describe('Storybook Components', () => {
  beforeEach('visits site', () => {
    cy.visit('http://localhost:6006')
    cy.contains('LoginPage', { timeout: 20000 })
  })
  it('has LoginOnboard component', () => {
    cy.contains('LoginPage')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-loginpage--empty-form&args=&globals=&viewMode=story'
    )
    cy.get('form')
    cy.contains('Log in your account')
    cy.contains('Personal Info')
    cy.contains('STEP 01/02')
  })

  it('has LeftSide component', () => {
    cy.contains('LeftSide')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-loginpage--empty-form&args=&globals=&viewMode=story'
    )
  })

  it('has Back component', () => {
    cy.contains('Back')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-loginpage--empty-form&args=&globals=&viewMode=story'
    )
  })

  it('has Input component', () => {
    cy.contains('Input')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-loginpage--empty-form&args=&globals=&viewMode=story'
    )
  })

  it('has TermsAndConditions component', () => {
    cy.contains('TermsAndConditions')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-loginpage--empty-form&args=&globals=&viewMode=story'
    )
  })

  it('has Buttons component', () => {
    cy.contains('Buttons')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-loginpage--empty-form&args=&globals=&viewMode=story'
    )
  })
})
