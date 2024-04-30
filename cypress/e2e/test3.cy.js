describe('handling popups', ()=> {
    it('teestCase', ()=> {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        // accept popup
        cy.on('window:alert', (str) => {


            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // accept confirm alert
        cy.on('window:confirm', (str) => {


            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})