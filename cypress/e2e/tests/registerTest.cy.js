import { registerPage } from "../../pom_pages/registerPage";
import registerData from '../../fixtures/registerData.json'
const registerObj = new registerPage()

describe('E2E Practice',()=> {
    it('Register Flow',()=>{
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.number)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()
    })
})