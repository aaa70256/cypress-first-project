describe('file upload', () => {
  it.skip('single file upload', () => {
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload')
      .attachFile('images.jpg')
    cy.get('input[id="file-submit"]').click()
    cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
  });
  it.skip('upload rename', () => {
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload')
      .attachFile({ filePath: 'images.jpg', fileName: 'test.jpg' })
    cy.get('input[id="file-submit"]').click()
    cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
  });

  it.skip('upload drag and drop', () => {
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#drag-drop-upload')
      .attachFile('images.jpg', { subjectType: 'drag-n-drop' })
    cy.wait(5000)
    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
      .contains('images.jpg')
  });

  it.skip('multiple files upload', () => {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
    cy.get('#filesToUpload')
      .attachFile(['images.jpg', 'images1.jpg'])
    cy.wait(5000);
    cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:')
  });

  it('shadow dom', () => {
    cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
    cy.get('.smart-browse-input', { includeShadowDom: true })
      .attachFile('images.jpg')
    cy.wait(5000)
    cy.get('.smart-item-name', { includeShadowDom: true }).contains('images.jpg')
  });
})