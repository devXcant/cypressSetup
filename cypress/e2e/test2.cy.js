describe('chnp', ()=> {
    it('auth', ()=> {
        cy.visit('https://chnp-frontend.onrender.com')
        cy.get('input[type=email]').type('superadmin@chnp.com')
        cy.get('input[type=password]').type('Password123')
        cy.get('.mt-6 > .w-full').click()
        cy.url({timeout: 30000}).should('include','/admin')
    })
})