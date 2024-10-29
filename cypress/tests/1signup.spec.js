import userData from "../fixtures/user-data.json"
import SignupPage from "../pages/signupPage.js"

const Chance = require('chance');

const chance = new Chance();
const signupPage = new SignupPage()


describe('SIGNUP feature test', () => {
  it('Register a new user SUCCESS', () => {
    signupPage.accessSignupPage()
    signupPage.signupValid(chance.first(), chance.last(), userData.userSuccess.username, userData.userSuccess.password, userData.userSuccess.confirmpassword)
  });

  it('Register a new user FAIL password invalid', () => {
    signupPage.accessSignupPage()
    signupPage.signupInvalidPassword(chance.first(), chance.last(), chance.name(), userData.userFail1.password, userData.userFail1.confirmpassword)
  });

  it('Register a new user FAIL password not match', () => {
    signupPage.accessSignupPage()
    signupPage.signupInvalidConfirmPassword(chance.first(), chance.last(), chance.name(), userData.userFail2.password, userData.userFail2.confirmpassword)
  });

  it('Register a new user FAIL no FIRSTNAME', () => {
    signupPage.accessSignupPage()
    signupPage.signupInvalidFirstName(chance.last(), chance.name(), userData.userFail2.password, userData.userFail2.confirmpassword)
  });

  it('Register a new user FAIL no LASTNAME', () => {
    signupPage.accessSignupPage()
    signupPage.signupInvalidPassword(chance.first(), chance.name(), userData.userSuccess.password, userData.userSuccess.confirmpassword)
  });

  it('Register a new user FAIL no USERNAME', () => {
    signupPage.accessSignupPage()
    signupPage.signupInvalidPassword(chance.first(), chance.last(), userData.userSuccess.password, userData.userSuccess.confirmpassword)
  });
});