class PDPpage {
  getProductArticleText() {
    return cy.get("h1").invoke('text').as('titlePDP')
  }

  clickWantToReadButtonOnPDP() {
    return cy.get("button:nth-child(1) > div:nth-child(1)").click()
  }

  clickWantToReadCrossButton() {
    return cy.get("#dropdown div:nth-child(1) > div:nth-child(3) > div:nth-child(2)").click()
  }

  clickThreeDotLink() {
    return cy.get("button:nth-child(1)").click()
  }

  clickWantToReadLink() {
    return cy.get("#activity a:nth-child(2) span:nth-child(2)").click()
  }

  getFirstPDPArticle() {
    return cy.get("div:nth-child(1) > div > div:nth-child(1) > span").should("have.text", this.titlePDP)
  }

  getImage() {
    return cy.get("picture > img").trigger('mouseover')
  }

  clickArrorwButton() {
    return cy.get("#menu-options").click()
  }

  clickCrossButton() {
    return cy.get("div:nth-child(4) > div:nth-child(2)").click()
  }

}

export default PDPpage
