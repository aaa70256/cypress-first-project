describe('assentions demo', () => {
  it('im assentions', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', 'orangehrmlive.com')
      .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .and('not.contain', 'dfdsfdsfs')
    cy.get("input[name='username']").should('have.class', 'oxd-input')

    cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')

    cy.xpath('//a').should('have.length', '5')

    cy.get("input[placeholder='Username']").type('Admin').should('have.value', 'Admin')
  })

  it('ex assentions', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()

    let name = 'dont change it man dont change it man';
    cy.get(".oxd-userdropdown-name").then((x) => {
      let userName = x.text();
      //BDD Style
      expect(userName).to.equal(name)
      expect(userName).to.not.equal(name)

      //TDD Style
      assert.equal(userName, name)
      assert.notEqual(userName, name)
    })
  })
})