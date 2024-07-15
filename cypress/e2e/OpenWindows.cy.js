describe('open windows', () => {

  //cypress無法處理新開頁面的驗證，所以有兩種方式可以修正這個問題

  //1.刪掉連結的target="_blank"這個屬性
  it('open 1', () => {
    cy.visit('https://the-internet.herokuapp.com/windows')
    //找到屬性並刪除
    cy.get(".example >a").invoke('removeAttr', 'target').click()
    cy.url().should('include', "https://the-internet.herokuapp.com/windows/new")
    cy.wait(5000)
    cy.go("back")
  })

  //2.直接找到連結的url並在跳轉一次到該連結目的
  it.only('open 2', () => {
    cy.visit('https://the-internet.herokuapp.com/windows')
    //找到屬性並刪除
    cy.get(".example >a").then((e) => {
      let url = e.prop('href')
      cy.visit(url)
    })
    cy.url().should('include', "https://the-internet.herokuapp.com/windows/new")
    cy.wait(5000)
    cy.go("back")
  })
})