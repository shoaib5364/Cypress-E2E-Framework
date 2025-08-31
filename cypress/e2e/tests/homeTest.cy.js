import { homePage } from "../../pom_pages/homePage";
import homeData from '../../fixtures/homeData.json'
const homeObj = new homePage()

describe('E2E Practice',()=> {
    before(()=>
    {
        cy.login(homeData.login.email, homeData.login.password)
    })

    it('home - AddToCart Flow',()=>{
        homeObj.searchProdut(homeData.product.productName)
        homeObj.addToCart()
        homeObj.verifySuccessMessage().should('contain',homeData.message.successMessage)
        .and('contain',homeData.product.productName);
        
    })

})