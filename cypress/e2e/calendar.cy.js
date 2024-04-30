
describe('testing', ()=> {
    it('iframes', ()=> {
        const year = '2027'
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('.react-date-picker__calendar-button').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.contains('button', year).click()
    })
})