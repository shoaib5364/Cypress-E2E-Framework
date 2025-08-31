import { get } from "lodash"

export class homePage{

locators={
    serachInput: 'input[placeholder="Search"]',
    searchClick: 'button[class="btn btn-default btn-lg"]',
    product: ':nth-child(1) > .product-thumb > .image > a > .img-responsive',
    addToCart: '#button-cart',
    successMessage: 'div[class="alert alert-success alert-dismissible"]',
}

searchProdut(productName){
    cy.get(this.locators.serachInput).type(productName)
    cy.get(this.locators.searchClick).click()
}

addToCart(){
    cy.get(this.locators.product).first().click()
    cy.get(this.locators.addToCart).first().click()
}

verifySuccessMessage(){
    return cy.get(this.locators.successMessage)
}


}