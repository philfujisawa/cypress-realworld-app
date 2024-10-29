import userData from "../fixtures/user-data.json"
import SigninPage from "../pages/signinPage.js"
import InitialPage from "../pages/initialPage.js"
import HistoryPage from "../pages/historyPage.js"

const Chance = require('chance');

const chance = new Chance();
const signinPage = new SigninPage()
const initialPage = new InitialPage()
const historyPage = new HistoryPage()

describe('Login, check Transaction History All and Mine', () => {
  it('Login, Transaction All Check', () => {
    signinPage.accessSigninPage()
    signinPage.loginAnyWithUser(userData.userSuccess.username, userData.userSuccess.password)
    initialPage.checkHomePage()
    historyPage.checkAllHistory()
  
  });

  it('Login, Mine Transaction Check', () => {
    signinPage.accessSigninPage()
    signinPage.loginAnyWithUser(userData.userSuccess.username, userData.userSuccess.password)
    initialPage.checkHomePage()
    historyPage.checkMineHistory()
  });
});
