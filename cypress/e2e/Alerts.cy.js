describe('dropdown', () => {
  it.skip('JS Alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsAlert()']").click()


    cy.on('window:alert', (t) => {
      expect(t).contains('I am a JS Alert')
    })

    cy.get('#result').should('have.text', 'You successfully clicked an alert')
  })

  it.skip('JS Confirm', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on('window:confirm', (t) => {
      expect(t).contains('I am a JS Confirm')

    })

    cy.get('#result').should('have.text', 'You clicked: Ok')
  })

  it.skip('JS Confirm off', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on('window:confirm', (t) => {
      expect(t).contains('I am a JS Confirm')

    })
    cy.on('window:confirm', () => false)
    cy.get('#result').should('have.text', 'You clicked: Cancel')
  })

  it.skip('js prompt alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.window().then((w) => {
      cy.stub(w, 'prompt').returns('DANNY')
    })
    cy.get("button[onclick='jsPrompt()']").click()
    // cy.on('window:prompt', () => false)

    cy.get('#result').should('have.text', 'You entered: null')

  })

  it('js prompt alert sdfdsfds', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', { auth: { username: 'adin', password: 'admin' } })
    cy.get("div[class='example'] p").should('have.contain', 'Congratulation')

  })
})