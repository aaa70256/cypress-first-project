class Login {
  setUserName(value) {
    cy.get("input[placeholder='Username']").type(value)
  }
  setPassword(value) {
    cy.get("input[placeholder='Password']").type(value)
  }
  clickSubmit() {
    cy.get('button[type="submit"]').click()
  }
  verifyLogin() {
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", "Dashboard")
  }
}

export default Login