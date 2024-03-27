describe('My first Cypress test', () => {
  beforeEach(() => {
  
    cy.visit('/')
   
  })

  it('checks page contains Welcome', () => {
   
    cy.get('div').should('include.text','Welcome! This application is for testing purposes only.')
  })

  it('can click on Sign up', () => {
    cy.get('[id=signup]').should('not.be.disabled')
    .click()
    cy.url(console.log())
    
  })
  

})




