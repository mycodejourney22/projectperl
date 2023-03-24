import { data } from "../../support/constants"
class Homepage {

  openHomePageMenu() {
    cy.get('[data-test-locator="SearchNavBarHamburger"]', { timeout: 60000 }).should('exist').click({ force: true })
  }

  openCreateWorkSpace() {
    cy.get('[data-testid="Sidebar-CreateFirstWorkspace"]', { timeout: 60000 }).should('exist').click({ force: true })
  }

  enterWorkspaceTitle() {
    cy.get('#input-title', { timeout: 60000 }).should('exist').type(data.word)
  }

  createWorkspace() {
    cy.get('[data-testid="Modal-Submit"]').click()
  }

  getHomePageLogo() {
    cy.get('[data-testid="PerlegoLogo"]').click()
  }

  enterBookName() {
    cy.get("#searchInput").type("Fiction")
  }

  clickArticle() {
    cy.get("a:nth-child(1) img").click()
  }
}

export default Homepage
