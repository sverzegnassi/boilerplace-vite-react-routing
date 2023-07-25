import './commands'
import { mount } from 'cypress/react18'
import { MemoryRouter } from 'react-router-dom'

Cypress.Commands.add('mount', (component, options = {}) => {
  const wrapped = <MemoryRouter initialEntries={['/']}>{component}</MemoryRouter>

  return mount(wrapped, options)
})
