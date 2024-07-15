describe('CssLocators', () => {
  it('LocatorsTest1', () => {
    cy.visit('https://www.lativ.com.tw/specialissue/together?pid=21070293&utm_source=google&utm_medium=GSN_lativ_together&AID=19090491&gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aCFG85LANjfgy8UU98y0RlV0Fkzf9X7eAHUiJ55fhVcA3c1WZbqAsxoCozEQAvD_BwE')
    cy.get('input#keyWord').type('上衣')
    cy.get("input[type='submit']").click()
    cy.get('.productname').contains('皮克斯系列長袖印花T恤-01-女')
  })
})