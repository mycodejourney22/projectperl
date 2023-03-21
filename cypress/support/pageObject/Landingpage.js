class Landingpage {
  clickLoginButton() {
    return cy.get(".sc-HLtgk > .sc-bHnazb > a").click()
  }

  acceptCAllCookiesButton() {
    return cy.get(".sc-gKPRtg:nth-child(2) > .sc-bqWxrE").click()
  }

  clickSearchInputField() {
    return cy.get('[data-testid="SearchBar"]').within(() => {
      cy.get('input[name="searchInput"]').type("{enter}")
    })
  }
}

export default Landingpage
