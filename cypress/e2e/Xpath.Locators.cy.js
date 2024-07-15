describe('Xpath', () => {
  it('xpath item', () => {
    cy.visit('https://www.lativ.com.tw/MAGAZINE?pid=2312281706')
    cy.xpath("//ul[@id='newMagazineList']/li").should('have.length', 14);
  });
})