import 'cypress-iframe'
describe('testing', ()=> {
    it('iframes', ()=> {

             cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
             cy.frameLoaded('#courses-iframe')
             cy.iframe().find("a[href*='mentorship']").eq(0).click()
             cy.iframe().find()("h1[class=")
    })
})