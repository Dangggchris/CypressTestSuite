Cypress.Commands.add('visitPage', () => {
  cy.visit('https://react-redux.realworld.io/')
})

Cypress.Commands.add('login', () => {
  cy.visitPage()
  cy.title().should('eq','Conduit')
  cy.location('protocol').should('eq','https:')
  cy.get(':nth-child(2) > .nav-link').click()
  cy.get(':nth-child(1) > .form-control').type('imsleepy1991@yahoo.com')
  cy.get(':nth-child(2) > .form-control').type('asdf1234').wait(3000)
  cy.get('.btn').contains('Sign in').click()
  cy.contains('Your Feed', {timeout:10000}).should('be.visible')
})