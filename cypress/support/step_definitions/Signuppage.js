/// <reference types="Cypress" />
import SignupPage from "../pageObject/Signuppage"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

const signupPage = new SignupPage()


Then('User enters First Name', () => {
  signupPage.enterFirstName()
  // Used pause method to deal with captcha on signup page
})
Then('User enters Last Name', () => {
  signupPage.enterLastName()
})
Then('User enters Email address', () => {
  signupPage.enterEmail()
  cy.pause()
})

Then('User enters Email confirmation', () => {
  signupPage.enterEmailConfirmation()
})

Then('User enters password', () => {
  signupPage.enterPassword()
})

Then('user accept terms and conditions', () => {
  signupPage.checkTermsAndConditions()
})

Then('User click continue button', () => {
  signupPage.clickSubmitButton()
  cy.wait(6000)
})

Then('User click on Perlego logo to go to homepage', () => {
  signupPage.clickPerlegoLogo()
})

Then('user click on continue from email', () => {
  signupPage.clickContinueButton()
})

Then('user click on continue personal details', () => {
  signupPage.clickContinueButton()
})
