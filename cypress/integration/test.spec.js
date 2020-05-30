describe('Testing Automation Testing Page', () => {
  it('Navigate to Women tops', () => {
    cy.visitPage()
    cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').trigger('mouseover').click()
    cy.get(':nth-child(2) > .subcategory-image > .img > .replace-2x').click()
    cy.get(':nth-child(3) > .subcategory-image > .img > .replace-2x').click()
    cy.get('.first-in-line > .product-container > .right-block > h5 > .product-name').click()
    cy.get('.icon-plus').click().should()
  })
})