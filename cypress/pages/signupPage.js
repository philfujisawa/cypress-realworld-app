class SignupPage {
    selectorsList() {
        const selectors = {
            firstnameField: "#firstName",
            lastnameField: "#lastName",
            usernameField: "#username",
            passwordField: "#password",
            confirmpasswordField: "#confirmPassword",
            signupButton: "button",
            wrongName: "#firstName-helper-text",
            wrongLastName: "#lastName-helper-text",
            wrongUsername: "#username-helper-text",
            wrongPassword: "#password-helper-text",
            wrongConfirmPassword: "#confirmPassword-helper-text"
        }

        return selectors
    }

    accessSignupPage () {
        cy.visit('http://localhost:3000/signin')
        cy.get("[data-test='signup']").click()
    }

    signupValid(firstname, lastname, username, password, confirmpassword) {
        cy.get(this.selectorsList().firstnameField).type(firstname)
        cy.get(this.selectorsList().lastnameField).type(lastname)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmpasswordField).type(confirmpassword)
        cy.get(this.selectorsList().signupButton).click()
        cy.location('pathname').should('equal', "/signin")
    }

    signupInvalidPassword(firstname, lastname, username, password, confirmpassword) {
        cy.get(this.selectorsList().firstnameField).type(firstname)
        cy.get(this.selectorsList().lastnameField).type(lastname)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmpasswordField).type(confirmpassword)
        cy.get("#password-helper-text").contains("Password must contain at least 4 characters")
    }

    signupInvalidConfirmPassword(firstname, lastname, username, password, confirmpassword) {
        cy.get(this.selectorsList().firstnameField).type(firstname)
        cy.get(this.selectorsList().lastnameField).type(lastname)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmpasswordField).type(confirmpassword)
        cy.get("#confirmPassword-helper-text").contains("Password does not match")
    }

    signupInvalidFirstName(lastname, username, password, confirmpassword) {
        cy.get(this.selectorsList().lastnameField).type(lastname)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmpasswordField).type(confirmpassword)
        cy.get("#firstName-helper-text").contains("First Name is required")
    }

    signupInvalidLastName(firstname, username, password, confirmpassword) {
        cy.get(this.selectorsList().firstnameField).type(firstname)
        cy.get(this.selectorsList().lastnameField).click()
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmpasswordField).type(confirmpassword)
        cy.get("#lastName-helper-text").contains("Last Name is required")
    }

    signupInvalidPassword(firstname, lastname, password, confirmpassword) {
        cy.get(this.selectorsList().firstnameField).type(firstname)
        cy.get(this.selectorsList().lastnameField).type(lastname)
        cy.get(this.selectorsList().usernameField).click()
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmpasswordField).type(confirmpassword)
        cy.get("#username-helper-text").contains("Username is required")
    }

}

export default SignupPage