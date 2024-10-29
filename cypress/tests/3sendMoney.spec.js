import userData from "../fixtures/user-data.json"
import SigninPage from "../pages/signinPage.js"
import SignupPage from "../pages/signupPage.js"
import InitialPage from "../pages/initialPage.js"
import TransactionPage from "../pages/transactionPage.js"

const Chance = require('chance');

const chance = new Chance();
const signupPage = new SignupPage()
const signinPage = new SigninPage()
const initialPage = new InitialPage()
const transactionPage = new TransactionPage()
const loginName = chance.last()
const contactName = 'Ted'
const paidAmount = chance.integer({ min: 0, max: 1000})


describe('Signup, Login and Send Money', () => {
  it('Register a new user, login and send money w/+ ACCOUNT BALANCE', () => {
    signupPage.accessSignupPage()
    signupPage.signupValid(chance.first(), chance.last(), loginName, userData.userSuccess.password, userData.userSuccess.confirmpassword)
    signinPage.loginAnyWithUser(loginName, userData.userSuccess.password)
    initialPage.checkinitialWindow()
    initialPage.NewUserFirstAction(userData.AccountFill.bank, userData.AccountFill.routing, userData.AccountFill.account)
    initialPage.checkHomePage()
    transactionPage.gotoTransactionPage()
    transactionPage.selectContact(contactName)
    transactionPage.paymentForm(paidAmount, 'Payment')
    transactionPage.paymentDoneCheck()
  });
});
