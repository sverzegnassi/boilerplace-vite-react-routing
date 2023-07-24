describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=link-to-another-page]').click()
    cy.get('h1').should('have.text', 'Another Page')
  })
})