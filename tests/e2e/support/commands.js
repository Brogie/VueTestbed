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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Custom Getter
Cypress.Commands.add('vuex', () =>
  cy.window().its('app.$store')
)

// Custom Getter
Cypress.Commands.add('router', () => {
  cy.window().its('app.$router')
})

// Custom Action with test
Cypress.Commands.add('login', () => {
  cy.vuex().invoke('commit', 'login')
  cy.vuex().its('getters.loggedIn').should('eq', true)
})

// Custom test with parameter
Cypress.Commands.add('shouldRouteTo', (route) => {
  cy.router().invoke('push', route)
  cy.location().should(loc => { expect(loc.pathname).to.eq(route) })
})
