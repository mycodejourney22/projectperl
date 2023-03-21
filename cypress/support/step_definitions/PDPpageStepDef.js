/// <reference types="Cypress" />
import PDPpage from "../pageObject/PDPpage"
import { Then } from "@badeball/cypress-cucumber-preprocessor"

const pDPPage = new PDPpage();

Then("User clicks on want to read button", () => {
  pDPPage.getProductArticleText()
  pDPPage.clickWantToReadButtonOnPDP()
  pDPPage.clickWantToReadCrossButton()

})

Then("User go to want to read button page", () => {
  pDPPage.clickThreeDotLink()
  pDPPage.clickWantToReadLink()
})

Then("User verifies the article is present in the page", () => {
  pDPPage.getFirstPDPArticle()
  pDPPage.getImage()
  pDPPage.clickArrorwButton()
  pDPPage.clickCrossButton()

})
