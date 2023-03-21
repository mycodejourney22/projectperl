/// <reference types="Cypress" />
import Landingpage from "../pageObject/Landingpage"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

const landingPage = new Landingpage()

Then('user click enter in the search box', () => {
  landingPage.clickSearchInputField()
})

Given('User navigates to the application', () => {
  cy.visit(Cypress.env("url"))
  landingPage.acceptCAllCookiesButton()
})

When('User click on the login button on landing page', () => {
  landingPage.clickLoginButton()
})
