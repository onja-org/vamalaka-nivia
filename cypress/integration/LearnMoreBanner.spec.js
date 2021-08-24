describe('LearnMoreBanner', () => {
  beforeEach('visits site', () => {
    cy.visit('http://localhost:6006')
    cy.contains('LearnMoreBanner', { timeout: 20000 })
  })
  it('Has LearnMoreBanner single button ', () => {
    cy.contains('LearnMoreBanner')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-learnmorebanner--single-button&args=&viewMode=story'
    )
    cy.contains('Madagascars peer-to-peer e-commerce platform')
    cy.contains(
      'Purchase high-quality products made by the people that sell them.'
    )
    cy.contains(
      'By cutting out middlemen, you know exactly where your purchase is from and how it was made.'
    )
    cy.get('button').contains('Learn how it works')
  })

  it('Has LearnMoreBanner multiple button ', () => {
    cy.contains('LearnMoreBanner')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-learnmorebanner--multiple-buttons&args=&viewMode=story'
    )
    cy.get('img').should('have.attr', 'src')
    cy.get('button').contains('Learn more')
    cy.get('button').contains('Can you trust us')
  })
})
