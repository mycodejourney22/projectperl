/// <reference types="Cypress" />
import LoginPage from "../pageObject/Loginpage"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

const loginPage = new LoginPage()

Then("User clicks on sign up button", () => {
  loginPage.clickSignUpButton()
})

Then("User enters the email address for login", () => {

  loginPage.enterEmailAddress()
  loginPage.clickContinueButton()
})

Then("User enters the password for the login", () => {
  loginPage.enterPassword()
  loginPage.clickLoginButton()
  cy.wait(8000)
})
