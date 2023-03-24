class PDPpage {
  getProductArticleText() {
    cy.get("h1").invoke('text').as('titlePDP')
  }

  clickWantToReadButtonOnPDP() {
    cy.get("button:nth-child(1) > div:nth-child(1)").click()
  }

  clickWantToReadCrossButton() {
    cy.get("#dropdown div:nth-child(1) > div:nth-child(3) > div:nth-child(2)").click()
  }

  clickThreeDotLink() {
    cy.get("button:nth-child(1)").click()
  }

  clickWantToReadLink() {
    cy.get("#activity a:nth-child(2) span:nth-child(2)").click()
  }

  getFirstPDPArticle() {
    cy.get("div:nth-child(1) > div > div:nth-child(1) > span").should("have.text", this.titlePDP)
  }

  getImage() {
    cy.get("picture > img").trigger('mouseover')
  }

  clickArrorwButton() {
    cy.get("#menu-options").click()
  }

  clickCrossButton() {
    cy.get("div:nth-child(4) > div:nth-child(2)").click()
  }

}

export default PDPpage
