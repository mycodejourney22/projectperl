/// <reference types="Cypress" />
import Homepage from "../pageObject/Homepage"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

const homePage = new Homepage()

Then('user click hamburger menu', () => {
  homePage.openHomePageMenu()
})

Then('user click create workspace', () => {
  homePage.openCreateWorkSpace()
})

Then('user enter workspace title', () => {
  homePage.enterWorkspaceTitle()
})

Then('user click create dashboard', () => {
  homePage.createWorkspace()
})

Then("User search article", () => {
  cy.wait(5000)
  homePage.enterBookName()
})

Then("User clicks on the first article", () => {
  cy.wait(5000)
  homePage.clickArticle()
  cy.wait(10000)
})
