import { data } from "../../support/constants"
class Homepage {

  openHomePageMenu() {
    return cy.get('[data-test-locator="SearchNavBarHamburger"]', { timeout: 60000 }).should('exist').click({ force: true })
  }

  openCreateWorkSpace() {
    return cy.get('[data-testid="Sidebar-CreateFirstWorkspace"]', { timeout: 60000 }).should('exist').click({ force: true })
  }

  enterWorkspaceTitle() {
    cy.get('#input-title', { timeout: 60000 }).should('exist').type(data.word)
  }

  createWorkspace() {
    cy.get('[data-testid="Modal-Submit"]').click()
  }

  getHomePageLogo() {
    return cy.get('[data-testid="PerlegoLogo"]').click()
  }

  enterBookName() {
    return cy.get("#searchInput").type("Fiction")
  }

  clickArticle() {
    return cy.get("a:nth-child(1) img").click()
  }
}

export default Homepage
