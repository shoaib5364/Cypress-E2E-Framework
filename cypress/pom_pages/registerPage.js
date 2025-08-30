export class registerPage{

locators={
    firstName: '#input-firstname',
    lastName: '#input-lastname',
    email: '#input-email',
    telephone: '#input-telephone',
    password: '#input-password',
    passwordConfirm: '#input-confirm',
    policyCheckbox: 'input[name="agree"]',
    continue: 'input[value="Continue"]'
}

openURL(){
    cy.visit(Cypress.env('URL'))
}

enterFirstName(FName)
{
    cy.get(this.locators.firstName).type(FName)
}

enterLastName(LName)
{
    cy.get(this.locators.lastName).type(LName)
}

enterEmail(Email)
{
    cy.get(this.locators.email).type(Email)
}

enterTelephone(Number)
{
    cy.get(this.locators.telephone).type(Number)
}

enterPassword(Password)
{
    cy.get(this.locators.password).type(Password)
    cy.get(this.locators.passwordConfirm).type(Password)
}

selectCheckbox()
{
    cy.get(this.locators.policyCheckbox).check()
}

clickOnContinue()
{
    cy.get(this.locators.continue).click()
}

}