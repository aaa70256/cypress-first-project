describe('Hook Tags', () => {

  //腳本最一開始要跑時會先跑這支(只會跑一次)
  before(() => {
    cy.log('**********************open************************')
  })

  //腳本結束前跑這支(只會跑一次)
  after(() => {
    cy.log('**********************close************************')
  })

  //開始跑每個it前先跑這支(有幾個it他就會跑幾次)
  beforeEach(() => {
    cy.log('**********************beforeEach************************')
  })

  //跑完it後跑這支(有幾個it他就會跑幾次)
  afterEach(() => {
    cy.log('**********************afterEach************************')
  })

  //skip的話hook就不會跑這隻
  it.skip('search', () => {
    cy.log('**************search*****************')
  });


  it('advance search', () => {
    cy.log('**************advance*****************')
  });

  //only的話只會跑這隻，hook也是會全部在這邊跑
  it.only('listing', () => {
    cy.log('**************listing*****************')
  });
})