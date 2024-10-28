class InitialPage {
    selectorsList() {
        const selectors = {
            initialWindow: "[data-test='user-onboarding-dialog-title']",
            nextButton: ".MuiButton-colorPrimary",
            bankName: '#bankaccount-bankName-input',
            //9 numbers max
            routingNumber: '#bankaccount-routingNumber-input',
            //9-12 numbers 
            accountNumber: '#bankaccount-accountNumber-input',
            saveButton: '.BankAccountForm-submit',
            doneButton: '.MuiButton-colorPrimary',
            homeText: '.NavBar-logo'
        }

        return selectors
    }

    checkinitialWindow () {
        cy.location('pathname')
        cy.get(this.selectorsList().initialWindow).should('be.visible')
    }

    NewUserFirstAction(bank, routing, account) {
        cy.get(this.selectorsList().nextButton).click()
        cy.get(this.selectorsList().bankName).type(bank)
        cy.get(this.selectorsList().routingNumber).type(routing)
        cy.get(this.selectorsList().accountNumber).type(account)
        cy.get(this.selectorsList().saveButton).click()
        cy.get(this.selectorsList().doneButton).click()
    }

    checkHomePage () {
        cy.wait(2000)
        cy.get(this.selectorsList().homeText).should('be.visible')
    }

    
    
}

export default InitialPage