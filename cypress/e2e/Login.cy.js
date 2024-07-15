import Login from "../PageObjects/LoginPage.js";

describe("Login", () => {
  //將要做的事情做成模組 引入使用就好
  it('login test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const ln = new Login()
    ln.setUserName("Admin")
    ln.setPassword("admin123")
    ln.clickSubmit()
    ln.verifyLogin()
  });
})