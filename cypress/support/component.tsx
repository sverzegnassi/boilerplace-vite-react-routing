import './commands'
import { mount } from 'cypress/react18'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

Cypress.Commands.add('mount', (component, options = {}) => {
  const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options

  const wrapped = <MemoryRouter {...routerProps}>{component}</MemoryRouter>

  return mount(wrapped, mountOptions)
})
