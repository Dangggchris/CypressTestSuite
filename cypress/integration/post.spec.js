describe('Testing Automation Testing Page', () => {
  it('Visit page', () => {
    cy.login()
  })

  it('Create New Post', () => {
    cy.contains('New Post').click()
    cy.hash().should('include','#/editor')
    cy.get('input[placeholder="Article Title"]').type('test')
    cy.get(':nth-child(2) > .form-control').type('test')
    cy.get(':nth-child(3) > .form-control').type('test').wait(3000)
    cy.contains('Publish Article').click()
    cy.url().should('include','article').wait(3000)
  })

  it('Mark and Un-mark as favorite', () => {
    cy.get('.nav-link').contains('cdanger').click()
    cy.contains('My Articles').should('be.visible')
    cy.get('.ion-heart').click().wait(3000)
    cy.contains('Favorited Articles').click().wait(3000)
    cy.url().should('include','favorites')
    cy.get('.ion-heart').click().wait(3000)

  })

  it('Delete ', () => {
    cy.get(':nth-child(4) > .nav-link').click().wait(3000)
    cy.get('.col-xs-12 > :nth-child(2) > :nth-child(1)').click().wait(3000)
    cy.get('.btn-outline-danger').click()
  })

})