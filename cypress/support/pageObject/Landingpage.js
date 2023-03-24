class Landingpage {
  clickLoginButton() {
    // return cy.get(".sc-HLtgk > .sc-bHnazb > a").click()
    cy.get(' div:nth-child(4) > div:nth-child(1) > a').click()
  }

  acceptCAllCookiesButton() {
    cy.get('[data-testid="CookieBanner-AcceptCookiesButton"]').click()
  }

  clickSearchInputField() {
    cy.get('[data-testid="SearchBar"]').within(() => {
      cy.get('input[name="searchInput"]').type("{enter}")
    })
  }
}

export default Landingpage
