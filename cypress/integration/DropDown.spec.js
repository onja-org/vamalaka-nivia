describe("Descriptive", () => {
    beforeEach("visits storybook", () => {
        cy.visit("http://localhost:6006")
        cy.contains("DropDown", { timeout: 20000 })

    })
    it("has paragraph ", () => {
        cy.contains("p")
        cy.visit('http://localhost:6006/iframe.html?id=header-dropdown--logo-template&args=&viewMode=story')
    })
    it('has select', () => {
        cy.visit('http://localhost:6006/iframe.html?id=header-dropdown--logo-template&args=&viewMode=story')
        cy.get('select').children('option')
    })
})