// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'HomePage')
  })
})

describe('Login tests', () => {
  it('Login page works', () => {
    cy.visit('/login')
    cy.contains('h1', 'Please login')
  })

  it('Redirect to login page if not logged in', () => {
    cy.visit('/about')
    cy.location().should(loc => { expect(loc.pathname).to.eq('/login') })
  })

  it('procced to auth content if logged in', () => {
    cy.visit('/')
    cy.login()
    cy.shouldRouteTo('/about')
  })
})
