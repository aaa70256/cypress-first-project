describe('mouse', () => {
  const url = 'https://demo.opencart.com/'
  it.skip('mouseHover', () => {
    cy.visit("https://demo.opencart.com/")
    cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger('mouseover').click();

    cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
      .should('be.visible');
  })

  it.skip('right click', () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    //方法1
    // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
    // cy.get('.context-menu-icon-copy > span').should('be.visible')

    //方法2
    cy.get('.context-menu-one.btn.btn-neutral').rightclick()
    cy.get('.context-menu-icon-copy > span').should('be.visible')
  })

  it.skip('double click', () => {
    cy.visit('https://dbclick.w3spaces.com/saved-from-Tryit-2024-07-05-h8rlp.html');
    cy.get("button[ondblclick='myFunction()']").trigger('dblclick')
    cy.get("#field1").then(e => {
      cy.get("#field2").should('have.text', e.text())
    })
  });

  it.skip('DRAG ON DROP', () => {
    cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    cy.get('#box5').should('be.visible')
    cy.get('#box105').should('be.visible')


    cy.get('#box5').drag('#box105', { force: true })
  });

  it('scrolling page', () => {
    cy.visit('https://www.worldometers.info/geography/flags-of-the-world/');
    cy.get(':nth-child(185) > [align="center"] > a > img').scrollIntoView({ duration: 3000 })
    cy.get(':nth-child(185) > [align="center"] > a > img').should('be.visible')
    cy.get(':nth-child(7) > [align="center"] > a > img').scrollIntoView({ duration: 1500 })
    cy.get(':nth-child(7) > [align="center"] > a > img').should('be.visible')
    cy.get('footer').scrollIntoView({ duration: 10000 })
    cy.get('footer').should('be.visible')

  });
})