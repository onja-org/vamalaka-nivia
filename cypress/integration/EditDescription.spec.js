/// <reference types="cypress" />
describe("Storybook Components", () => {
    beforeEach("visits site", () => {
        cy.visit("http://localhost:6006")
        cy.contains("EditDescription", { timeout: 20000 })

    })
    it('has label and text area', () => {
        cy.contains('EditDescription')
        cy.visit('http://localhost:6006/iframe.html?id=header-editdescription--logo-template&args=&viewMode=story')
    })
})