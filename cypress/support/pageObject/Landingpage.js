class Landingpage {
  getLoginButton() {
    return cy.get(".sc-HLtgk > .sc-bHnazb > a")
  }

  getAcceptCAllCookiesButton() {
    return cy.get(".sc-gKPRtg:nth-child(2) > .sc-bqWxrE")
  }

  clickSearchInputField() {
    return cy.get('[data-testid="SearchBar"]').within(() => {
      cy.get('input[name="searchInput"]').type("{enter}")
    })
  }
}

export default Landingpage
