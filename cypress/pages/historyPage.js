class HistoryPage {
    selectorsList() {
        const selectors = {
            mineButton: '[data-test="nav-personal-tab"]',
            historyDate: '.MuiChip-deleteIcon',
            daybeforeButton: '[data-date="2024-10-26"]',
            yesterdayButton: '[data-date="2024-10-27"]',
            noTransation: '.css-mpyo7s-MuiTypography-root'         
        }

        return selectors
    }

    checkHistory () {
        cy.get(this.selectorsList().mineButton).click()
        cy.location('pathname').should('equal', "/personal")
    }

    checkHistoryBefore () {
        cy.get(this.selectorsList().mineButton).click()
        cy.location('pathname').should('equal', "/personal")
        cy.get(this.selectorsList().historyDate).eq(0).click()
        cy.get(this.selectorsList().daybeforeButton).click()
        cy.get(this.selectorsList().yesterdayButton).click()
        cy.get(this.selectorsList().noTransation).contains('No Transactions')
    }
   
}

export default HistoryPage