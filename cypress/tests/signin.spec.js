import userData from "../fixtures/user-data.json"
import SigninPage from "../pages/signinPage.js"

const Chance = require('chance');

const chance = new Chance();
const signinPage = new SigninPage()


describe('SIGNIN feature test', () => {
  it('Login SUCCESS', () => {
    signinPage.accessSigninPage()
    signinPage.loginAnyWithUser(userData.userSuccess.username, userData.userSuccess.password)
    cy.get("[data-test='sidenav-home']").should("contain", "Home")
  });

  it('Login FAIL User Name', () => {
    signinPage.accessSigninPage()
    signinPage.checkAccessInvalidUserName(userData.userSuccess.password)
  });

  it('Login FAIL Password', () => {
    signinPage.accessSigninPage()
    signinPage.checkAccessInvalidPassword(userData.userSuccess.username, userData.userFail1.password)
  });

  it('Login FAIL User Name', () => {
    signinPage.accessSigninPage()
    signinPage.checkAccessInvalidUser(userData.userSuccess.username, userData.userFail2.password)
  });

});