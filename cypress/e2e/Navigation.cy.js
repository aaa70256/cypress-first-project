describe('musuite', () => {
  it('navigation test', () => {
    cy.visit('https://tw.yahoo.com/')
    cy.title().should('eq', 'Yahoo奇摩')
    cy.get("div[id='Masterwrap'] div:nth-child(2) ul:nth-child(1) li:nth-child(1) a:nth-child(1) span:nth-child(1)").click()
    cy.get('.Logo__LogoLink-sc-1ri0ib5-2').should('have.text', 'Yahoo奇摩拍賣')

    //返回前頁
    cy.go('back')
    cy.title().should('eq', 'Yahoo奇摩')


    //前進下一頁
    cy.go('forward')
    cy.get('.Logo__LogoLink-sc-1ri0ib5-2').should('have.text', 'Yahoo奇摩拍賣')

    //返回前頁
    cy.go(-1)
    cy.title().should('eq', 'Yahoo奇摩')


    //前進下一頁
    cy.go(1)
    cy.get('.Logo__LogoLink-sc-1ri0ib5-2').should('have.text', 'Yahoo奇摩拍賣')

    cy.reload()
    cy.get('.Logo__LogoLink-sc-1ri0ib5-2').should('have.text', 'Yahoo奇摩拍賣')


  });
})