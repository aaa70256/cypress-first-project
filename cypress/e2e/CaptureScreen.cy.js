describe('mypro', () => {
  it.skip('擷取螢幕', () => {
    cy.visit('https://www.opencart.com/')
    //screenshot執行後結圖的圖檔會存放在screenshot資料夾中

    //截圖全畫面
    cy.screenshot("home page")
    cy.wait(5000);
    //截圖指定元素
    cy.get("img[title='OpenCart - Open Source Shopping Cart Solution']").screenshot("logo")
  });

  //只有輸入命令才能自動截取失敗的截圖 code無法
  //npx cypress run --spec cypress/e2e/CaptureScreen.cy.js
  it('自動截取失敗截圖', () => {
    cy.visit('https://www.opencart.com/')
    cy.get("body > header:nth-child(3) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)").click()
    cy.get("div[id='blog-search'] h4").should('have.text', "ABC")

  });
})