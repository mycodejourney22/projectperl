class Searchpage {

  filterByLanguage() {
    const randomNum = Math.floor(Math.random() * 5)
    cy.get('[data-component-locator="LanguageFilterSearch-Books"]').within(() => {
      cy.findByRole('textbox').click()
      return cy.get('li').eq(randomNum).click()
    })
  }

  getFilterButton() {
    cy.get('.sc-futgFh').within(() => {
      return cy.get('[data-testid="MobileFilterMenuButton"]').click()
    })
  }

  filterByFormat() {
    cy.get('.sc-iyFuvt').within(() => {
      return cy.get('[data-testid="SearchFilterButton"]').last().click({ force: true })
    })
  }

  chooseFormatPreference() {
    const formatFilter = ['ePub', 'PDF'][Math.floor(Math.random() * 1)]
    cy.findByRole('listbox').within(() => {
      return cy.findByText(formatFilter).click({ force: true })
    })
  }

  countPaginationAndClickNext() {
    cy.get('.sc-dTPOJz').within(() => {
      cy.get('.sc-gcxUDs').then(($data) => {
        cy.wrap($data).should('have.length', '4')
        cy.get('[data-component-locator = "paginationButtonNext"]').within(() => {
          cy.get('a').should('be.visible').click()
        })
      })
    })
  }

  getFinalNumberOfPages() {
    cy.wait(5000).then(() => {
      cy.get('.sc-gcxUDs').should('be.visible').should('have.length', '5')
    })
  }

}


export default Searchpage;
