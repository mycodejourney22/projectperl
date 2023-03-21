import { data } from "../../support/constants"
class Loginpage {
  getSignUpButton() {
    return cy.get(".sc-lhlUkk")
  }

  enterEmailAddress() {
    return cy.get("#input-email").type(data.signinemail)
  }

  clickContinueButton() {
    return cy.get(".sc-jIILKH").click()
  }

  enterPassword() {
    return cy.get("div:nth-child(3) > input").type(data.password)
  }

  clickLoginButton() {
    return cy.get(".sc-jIILKH").click()
  }
}

export default Loginpage
