describe('ccommand', () => {

  //透過客製化指令(custom command)執行腳本
  it.skip('handling link', () => {
    cy.visit('https://demo.nopcommerce.com/')


    //未客製化指令的code長這樣
    // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
    // cy.get("div[class='product-name'] h1").should('have.text', "Apple MacBook Pro 13-inch")

    //透過custom command的指令長這樣(寫在command.js內)
    cy.clickLink('Apple MacBook Pro 13-inch')
    cy.get("div[class='product-name'] h1").should('have.text', "Apple MacBook Pro 13-inch")
  });


  //強制覆蓋指令
  it.skip('over command', () => {
    cy.visit("https://demo.nopcommerce.com/")
    //我們cc內用contains抓取label 但他判斷嚴格 大小寫不一樣它就掛了
    cy.clickLink('APPLE MacBook PRO 13-inch')
    cy.get("div[class='product-name'] h1").should('have.text', "Apple MacBook Pro 13-inch")
  });

  it('login command', () => {
    cy.visit("https://demo.nopcommerce.com/")
    cy.clickLink('Log in')
    cy.loginapp("testing@gmail.com", "test123")
    cy.get('h1').should('have.text', "Welcome, Please Sign In!")
  });
})