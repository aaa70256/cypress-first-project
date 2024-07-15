


describe('dropdown', () => {
  const pageURL = 'https://www.google.com/'

  it.skip('select', () => {
    cy.visit(pageURL)
    cy.get('#country').select("Canada").should('have.value', 'canada')
  })

  it.skip('select two', () => {
    cy.visit(pageURL)
    cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1)').click()
  })


  it('select 3', () => {
    cy.visit(pageURL)
    cy.get("#APjFqb").type("cypress automation")
    cy.get('div.wM6W7d>span').should('have.length', 13)
    cy.wait(5000)
    cy.get('div.wM6W7d>span').each(($el, inde, $list) => {
      if ($el.text() == 'cypress automation tools') {
        cy.wrap($el).click()
      }
    })
    cy.get("#APjFqb").should('have.value', 'cypress automation tools')
  })
})