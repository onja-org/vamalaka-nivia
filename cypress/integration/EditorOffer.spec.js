/// <reference types="cypress" />
describe("Storybook Components", () => {
    beforeEach("visits site", () => {
        cy.visit("http://localhost:6006")
        cy.contains("EditorOffer", { timeout: 20000 })

    })

    it("has button ", () => {
        cy.contains("Button")
        cy.visit('http://localhost:6006/iframe.html?id=header-editoroffer--logo-template&args=&viewMode=story')
    })

    it('has input', () => {
        cy.contains('Input')
        cy.visit('http://localhost:6006/iframe.html?id=header-editoroffer--logo-template&args=&viewMode=story')
    })

    it('has dropDown ', () => {
        cy.contains('DropDown')
        cy.visit('http://localhost:6006/iframe.html?id=header-editoroffer--logo-template&args=&viewMode=story')
    })
})
