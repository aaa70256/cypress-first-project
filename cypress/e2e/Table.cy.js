describe('Table', () => {

  //所有it執行前先執行這邊
  beforeEach('Login', () => {
    cy.visit('https://demo.opencart.com/admin/index.php')
    cy.get('#input-username').clear().type('demo')
    cy.get('#input-password').clear().type('demo')
    cy.get("button[type='submit']").click()

    cy.get(".parent.collapsed[href='#collapse-5']").click()
    cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click()

  })

  //針對表格的行數跟欄數做驗證
  it.skip('test 1', () => {
    cy.get('.table.table-bordered.table-hover>tbody>tr').should('have.length', '10')
    cy.get('.table.table-bordered.table-hover>thead>tr>td').should('have.length', '7')

  })

  //去驗證單筆頁數資料內容是否正確
  it.skip('test 2', () => {
    cy.get('.table.table-bordered.table-hover>tbody>tr:nth-child(3)>td:nth-child(3)')
      .contains('fjhfhjh@gmail.com')
  })


  //查看table內所有資料
  it.skip('test 3', () => {
    cy.get('.table.table-bordered.table-hover>tbody>tr').each(($row, index, $rows) => {
      cy.wrap($row).within(() => {
        cy.get('td:nth-child(3)').each(($col, index, $cols) => {
          cy.log($col.text())
        })
      })
    })
  })

  //表格有分頁
  it('pagination', () => {
    // let totalPages;
    // cy.get('.col-sm-6.text-end').then((e) => {
    //   let mytexy = e.text();

    //   totalPages = mytexy.substring(mytexy.indexOf("(") + 1, mytexy.indexOf("Pages") - 1)
    //   cy.log("total pages" + totalPages)
    // })

    let totalPages = 5;
    for (let i = 1; i <= totalPages; i++) {
      if (totalPages > 1) {
        cy.get("ul[class='pagination']>li:nth-child(" + i + ")").click()
        cy.wait(3000)
        cy.get('.table.table-bordered.table-hover>tbody>tr').each((el, index, list) => {
          cy.wrap(el).within(() => {
            cy.get('td:nth-child(3)').then((e) => {
              cy.log(e.text())
            })
          })
        })
      }
    }
  })
})