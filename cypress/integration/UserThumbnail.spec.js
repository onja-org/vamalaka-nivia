/// <reference types="cypress" />

describe('Storybook', () => {
    beforeEach('visits storybook', () => {
        cy.visit('http://localhost:6006')
        cy.contains('UserThumbnail', { timeout: 20000 })
    })
    it('Has an image', () => {
        cy.contains('UserThumbnail')
        cy.visit(
            'http://localhost:6006/iframe.html?id=components-userthumbnail--imagethumbnail&args=&viewMode=story'
        )
        cy.get('img').should('have.attr', 'src')
    })
})
