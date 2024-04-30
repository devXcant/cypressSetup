import Homepage from "../integration/pageObjects/HomePage"; 
import ProductPage from "../integration/pageObjects/ProductPage";

describe('hooks', function() {

    before(function() {
        cy.fixture('examples').then(function(data)
        {

            this.data= data;

        })
            
        })


    it('first hooks', function() {
        const homePage = new Homepage()
        const productPage = new ProductPage()
     

        cy.visit(Cypress.env('url')+"/angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEnterpreneur().should('be.disabled')
        homePage.getShopTab().click()
        productPage.checkoutButton().click()
    })

    // it.only('seconds hooks', function() {
    //     cy.visit('https://rahulshettyacademy.com/angularpractice/shop')

    //     this.data.productName.forEach(function(element){
    //         cy.selectProduct(element)
    //     })


    // })

    
})


