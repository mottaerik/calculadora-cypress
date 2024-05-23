/// <reference types="cypress" />

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//     cy.contains('Hello')
//   })
// })

describe('Soma', () => {
  it('Soma 1 + 1 = 2', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get(':nth-child(11)').click()
    // cy.get('button').contains('1').click()
    cy.get('#plus').click()
    cy.get(':nth-child(11)').click()
    cy.get('#equal').click()
    cy.get('.display-container > div').contains('2')
  })
})

describe('Subtração', () => {
  it('Subtração 1 - 1 = 0', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get(':nth-child(11)').click()
    cy.get(':nth-child(10)').click()
    cy.get(':nth-child(11)').click()
    cy.get('#equal').click()
    cy.get('.display-container > div').contains('0')
  })
})

describe('Divisão', () => {
  it('Divisão 4 / 8 = 2', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('4').click()
    cy.get('.panel > :nth-child(2)').click()
    cy.get('button').contains('8').click()
    cy.get('#equal').click()
    cy.get('.display-container > div').contains('0.5')
  })
})

describe('Multiplicação', () => {
  it('Multiplicação 100 * 10 = 1000', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('1').click()
    cy.get('button').contains('0').click()
    cy.get('button').contains('0').click()
    cy.get('.panel > :nth-child(6)').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('0').click()
    cy.get('#equal').click()
    cy.get('.display-container > div').contains('1000')
  })
})

describe('Zerar o display', () => {
  it('AC = 0', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('button').contains('1').click()
    cy.get('#AC').click()
    cy.get('.display-container > div').contains('0')
  })
})