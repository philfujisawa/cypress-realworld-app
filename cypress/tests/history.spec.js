import userData from "../fixtures/user-data.json"
import SigninPage from "../pages/signinPage.js"
import InitialPage from "../pages/initialPage.js"
import HistoryPage from "../pages/historyPage.js"

const Chance = require('chance');

const chance = new Chance();
const signinPage = new SigninPage()
const initialPage = new InitialPage()
const historyPage = new HistoryPage()

describe('Login, check Transaction History and Before', () => {
  it('Login, Transaction Check OK', () => {
    signinPage.accessSigninPage()
    signinPage.loginAnyWithUser(userData.userSuccess.username, userData.userSuccess.password)
    initialPage.checkHomePage()
    historyPage.checkHistory()
  
  });

  it('Login, Before Transaction Check Zero', () => {
    signinPage.accessSigninPage()
    signinPage.loginAnyWithUser(userData.userSuccess.username, userData.userSuccess.password)
    initialPage.checkHomePage()
    historyPage.checkHistory()
    historyPage.checkHistoryBefore()
  });
});
