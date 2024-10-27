class TransactionPage {
    selectorsList() {
        const selectors = {
            new$Button: '.MuiButton-contained',
            selectContact: '[data-test="user-list-search-input"]',
            contactButton: '[data-test="user-list-item-uBmeaz5pX"]',
            amountField: '#amount',
            noteField: '#transaction-create-description-input',
            payButton: '[data-test="transaction-create-submit-payment"]',
            paymentDone: 'h2',
            returnButton: '[data-test="new-transaction-return-to-transactions"]',
            mineButton: '[data-test="nav-personal-tab"]',
            payNameCheck: '.TransactionDetail-paper',
            payAmountCheck: '.MuiGrid-grid-xs-true'            
        }

        return selectors
    }

    gotoTransactionPage () {
        cy.get(this.selectorsList().new$Button).click()
        cy.location('pathname').should('equal', '/transaction/new')
    }

    selectContact(contactname) {
        cy.get(this.selectorsList().selectContact).click({force:true}).type(contactname)
        cy.get(this.selectorsList().contactButton).click()
    }

    paymentForm (amount, note) {
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().noteField).type(note)
        cy.get(this.selectorsList().payButton).click()
    }

    paymentDoneCheck () {
        cy.get(this.selectorsList().paymentDone).contains('Paid')
    }

    checkHistory () {
        cy.get(this.selectorsList().returnButton).click()
        cy.get(this.selectorsList().mineButton).click()
        cy.location('pathname').should('equal', "/personal")
        cy.get(this.selectorsList().payAmountCheck).eq(0).click()
        cy.get(this.selectorsList().payNameCheck).should('contain', 'Ted Parisian')
    }
   
}

export default TransactionPage