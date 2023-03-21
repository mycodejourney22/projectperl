import { data } from "../../support/constants"


class Signuppage {

  enterFirstName() { return cy.get('#input-firstName').type(data.firstName) }

  enterLastName() { return cy.get('input[id="input-lastName"]').type(data.lastName) }

  enterEmail() { return cy.get('input[id="input-email"]').type(data.email) }

  enterEmailConfirmation() { return cy.get('input[id="input-confirmationEmail"]').type(data.email) }

  enterPassword() { return cy.get('input[id="password"]').type(data.password) }

  checkTermsAndConditions() {
    return cy.get('[data-testid="acceptTermsConditions"]').should('be.visible').check({ force: true })
  }

  clickContinueButton() {
    return cy.get('[data-testid="AccountCreation-ContinueButton"]').click()
  }
  clickSubmitButton() {
    return cy.get('[data-testid="AccountCreation-SubmitButton"]').click()
  }

  clickPerlegoLogo() {
    cy.get('[data-testid="PlanCard-Recurrence"]').should('exist')
    cy.get('[data-testid="PerlegoLogo"]').click()
  }


}

export default Signuppage
