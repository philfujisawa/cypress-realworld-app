class SigninPage {
    selectorsList() {
        const selectors = {
            usernameField: "#username",
            passwordField: "#password",
            loginButton: "button",
            wrongUsername: "#username-helper-text",
            wrongPassword: "#password-helper-text",
            wrongCredentialAlert: ".MuiAlert-message"
        }

        return selectors
    }

    accessSigninPage () {
        cy.visit('http://localhost:3000/signin')
    }

    loginAnyWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccessInvalidUserName (password) {
        cy.get(this.selectorsList().usernameField).click()
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().wrongUsername).should("contain", "Username is required")
    }

    checkAccessInvalidPassword (username,password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().usernameField).click()
        cy.get(this.selectorsList().wrongPassword).should("contain", "Password must contain at least 4 characters")
    }
    
    checkAccessInvalidUser (username,password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert).should("contain", "Username or password is invalid")
    }
    
}

export default SigninPage