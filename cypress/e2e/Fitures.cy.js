describe("matest", () => {
  it.skip('demo test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //fixtrue默認加載.json檔
    cy.fixture('orangehrm').then((data) => {
      cy.get("input[placeholder='Username']").type(data.username)
      cy.get("input[placeholder='Password']").type(data.password)
      cy.get('button[type="submit"]').click()
      cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").click()
      cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', data.expected)
    })
  });


  //在網頁loading後將資料利用這個hook取出
  let data;
  before(() => {
    cy.fixture("orangehrm").then(item => {
      data = item
    })
  })

  //假設有多筆資料 我們只需抓data的資料放入 就可以跑類迴圈的方式進行test
  it.skip('hook data', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get("input[placeholder='Username']").type(data.username)
    cy.get("input[placeholder='Password']").type(data.password)
    cy.get('button[type="submit"]').click()
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").click()
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', data.expected)
  });

  //如果回傳的資料有多筆，會進行多筆資料的測試我們稱為"數據驅動測試"
  it('data driven test', () => {
    cy.fixture("orangehrm").then(item => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      item.forEach(users => {
        cy.get("input[placeholder='Username']").type(users.username)
        cy.get("input[placeholder='Password']").type(users.password)
        cy.get('button[type="submit"]').click()

        if (users.username === "Admin" && users.password === "admin123") {
          cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', users.expected)
          cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
          cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        } else {
          cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', users.expected)
        }
      });
    })
  });
})