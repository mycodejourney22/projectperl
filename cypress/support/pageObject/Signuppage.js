import { data } from "../../support/constants"


class Signuppage {

  enterFirstName() { cy.get('#input-firstName').type(data.firstName) }

  enterLastName() { cy.get('input[id="input-lastName"]').type(data.lastName) }

  enterEmail() { cy.get('input[id="input-email"]').type(data.email) }

  enterEmailConfirmation() { cy.get('input[id="input-confirmationEmail"]').type(data.email) }

  enterPassword() { cy.get('input[id="password"]').type(data.password) }

  checkTermsAndConditions() {
    cy.get('[data-testid="acceptTermsConditions"]').should('be.visible').check({ force: true })
  }

  clickContinueButton() {
    cy.get('[data-testid="AccountCreation-ContinueButton"]').click()
  }
  clickSubmitButton() {
    cy.get('[data-testid="AccountCreation-SubmitButton"]').click()
  }

  clickPerlegoLogo() {
    cy.get('[data-testid="PlanCard-Recurrence"]').should('exist')
    cy.get('[data-testid="PerlegoLogo"]').click()
  }


}

export default Signuppage
