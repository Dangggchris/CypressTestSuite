describe('Testing Automation Testing Page', () => {
  it('Visit page', () => {
    cy.visitPage()
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(1) > .form-control').type('imsleepy1991@yahoo.com')
    cy.get(':nth-child(2) > .form-control').type('asdf1234')
    cy.get('.btn').contains('Sign in').click()
  })
})