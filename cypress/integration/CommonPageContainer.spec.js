/// <reference types="cypress" />

describe('CommonPageContainer', () => {
	beforeEach('visits Common Container Component', () => {
		cy.visit('http://localhost:6006')
		cy.contains('CommonPageContainer', { timeout: 20000 })
	})
	it('has component', () => {
		cy.contains('CommonPageContainer')
		cy.visit(
			'http://localhost:6006/?path=/story/components-commonpagecontainer--common-container-component-with-samllcontents'
		)
	})
	it('has header component', () => {
		cy.contains('Header')
		cy.visit(
			'http://localhost:6006/?path=/story/components-commonpagecontainer--common-container-component-with-samllcontents'
		)
	})
	it('has PageFooter component', () => {
		cy.contains('Page Footer')
		cy.visit(
			'http://localhost:6006/?path=/story/components-commonpagecontainer--common-container-component-with-samllcontents'
		)
	})
})
