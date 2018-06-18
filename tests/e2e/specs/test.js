// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:3000')
    cy.contains('li', 'Fruit (router)').click()
    cy.contains('li', 'Apple LIGHTCORAL')
    cy.contains('li', 'Colours (router)').click()
    cy.contains('li', 'INDIANRED')
  })
})
