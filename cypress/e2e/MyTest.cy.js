describe('color name', () => {

  it('test1', () => {
    //步驟
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq', 'OrangeHRM')
  })
  it('test2', () => {
    //步驟
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq', 'OrangeHRM123')
  })
})