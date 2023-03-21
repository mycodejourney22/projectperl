/// <reference types="Cypress" />
import Searchpage from "../pageObject/Searchpage"
import { When, Then } from "@badeball/cypress-cucumber-preprocessor"

const searchPage = new Searchpage()

When('user choose the language filter option', () => {
  searchPage.filterByLanguage()
})

Then('click on the filter button', () => {
  searchPage.getFilterButton()
})

Then('user choose the format option', () => {
  searchPage.filterByFormat()
})

Then('user choose format preference', () => {
  searchPage.chooseFormatPreference()
})

Then('verify that you have one to four pages are displayed and click next', () => {
  searchPage.countPaginationAndClickNext()
})

Then('finally verify that one to five pages are displayed', () => {
  searchPage.getFinalNumberOfPages()
})
