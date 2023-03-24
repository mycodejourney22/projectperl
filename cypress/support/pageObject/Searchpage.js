class Searchpage {

  filterByLanguage() {
    const randomNum = Math.floor(Math.random() * 5)
    cy.get('[data-component-locator="LanguageFilterSearch-Books"]').within(() => {
      cy.findByRole('textbox').click()
      cy.get('li').eq(randomNum).click()
    })
  }

  getFilterButton() {
    cy.get('[data-testid="MobileFilterMenuButton"]').click()
  }

  filterByFormat() {
    cy.get('[data-testid="SearchFilterButton"]').last().click({ force: true })
  }

  chooseFormatPreference() {
    const formatFilter = ['ePub', 'PDF'][Math.floor(Math.random() * 1)]
    cy.findByText(formatFilter).click({ force: true })
  }


  countPaginationAndClickNext() {
    cy.get('[data-component-locator="pagination-wrapper"]').
      children().should('have.length', 4)
    cy.get('[data-component-locator = "paginationButtonNext"]').find('a').
      should('be.visible').click()
  }


  getFinalNumberOfPages() {
    cy.wait(3000).then(() => {
      cy.get('[data-component-locator="pagination-wrapper"]').
        children().should('have.length', 5)
    })
  }

}


export default Searchpage;
