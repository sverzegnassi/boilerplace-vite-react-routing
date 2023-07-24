import React from 'react'
import Index from './Index'

describe('<Index />', () => {
  it('increments the value inside the button', () => {
    cy.mount(<Index />)
    cy.get('[data-cy=counter-btn]').click()
    cy.get('[data-cy=counter-btn]').should('have.text', 'count is 1')
  })
})