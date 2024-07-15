// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="cypress-xpath" />


//自定義點擊腳本  之後只要傳送label就可以自動執行指令
Cypress.Commands.add("clickLink", (label) => {
  cy.get('a').contains(label).click()
})

//覆蓋contains()
Cypress.Commands.overwriteQuery(
  "contains",
  function (contains, filter, text, userOptions = {}) {

    // 判斷是否政則表達式
    if (Cypress._.isRegExp(text)) {
      // .contains(filter, text)
      // Do nothing
      //判斷是否物件  
    } else if (Cypress._.isObject(text)) {
      // .contains(text, userOptions)
      userOptions = text
      text = filter
      filter = ''
      //判斷是否undefined 
    } else if (Cypress._.isUndefined(text)) {
      // .contains(text)
      text = filter
      filter = ''
    }

    userOptions.matchCase = false;

    let contains0 = contains.bind(this)    // this line fixes the error

    return contains0(filter, text, userOptions)
  }
)

Cypress.Commands.add('loginapp', (email, password) => {
  cy.get("#Email").type(email)
  cy.get("#Password").type(password)
  cy.get("button[class='button-1 login-button']").click()
})