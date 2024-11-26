class HistoryPage {
    selectorsList() {
        const selectors = {
            mineButton: '[data-test="nav-personal-tab"]',
            everyoneButton: '.MuiListItemText-primary',
            allTransaction: '.ReactVirtualized__Grid'         
        }

        return selectors
    }

    checkAllHistory () {
        cy.get(this.selectorsList().everyoneButton).eq(0).click( { force: true } )
        cy.get(this.selectorsList().allTransaction).should('be.visible')
    }

    checkMineHistory () {
        cy.get(this.selectorsList().mineButton).click( { force: true } )
        cy.location('pathname').should('equal', "/personal")
    }
   
}

export default HistoryPage