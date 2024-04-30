 /// <reference types="Cypress" /> 

describe('Testing', ()=> {




    it('first case', ()=> {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART')
        cy.get(':nth-child(2) > .product-action > button').click()
    })

    it.only('more testing', ()=> {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        // cy.get('products').find('.product').contains('Cashews').get(':nth-child() > .product-action > button').click()
        cy.get('.products').find('.product').each(($el, index, $list) => {

        
        })

    })
})