
Feature: Sign up and log in

  As a new user
  I want to be able to sign up, store my new credentials, log in, and create a workspace
  So that I can start using the Perlego platform

  Background:

  Scenario: Sign up, store new credentials, log in, and create a workspace
    Given User navigates to the application
    When User click on the login button on landing page
    Then User clicks on sign up button
    Then User enters Email address
    Then User enters Email confirmation
    Then user click on continue from email
    Then User enters First Name
    Then User enters Last Name
    Then user click on continue personal details
    Then User enters password
    Then user accept terms and conditions
    Then User click continue button
    Then User click on Perlego logo to go to homepage
    Then user click hamburger menu
    Then user click create workspace
    Then user enter workspace title
    Then user click create dashboard
