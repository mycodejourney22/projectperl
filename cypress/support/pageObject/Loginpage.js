import { data } from "../../support/constants"
class Loginpage {
  clickSignUpButton() {
    cy.get('[data-testid="CheckoutNavBar-SignUpLink"]').click()
  }

  enterEmailAddress() {
    cy.get("#input-email").type(data.signinemail)
  }

  clickContinueButton() {
    cy.get("div:nth-child(1) > button").click()
  }

  enterPassword() {
    cy.get("div:nth-child(3) > input").type(data.password)
  }

  clickLoginButton() {
    cy.get("div:nth-child(1) > button").click()
  }
}

export default Loginpage
