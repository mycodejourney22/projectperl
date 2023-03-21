Feature: Search page filters

  As a user
  I want to be able to filter search results on the search page
  So that I can find relevant books more easily

  Scenario: Basic filter combinations return at least 5 pages of results
    Given User navigates to the application
    Then user click enter in the search box
    When user choose the language filter option
    Then click on the filter button
    Then user choose the format option
    Then user choose format preference
    Then verify that you have one to four pages are displayed and click next
    Then finally verify that one to five pages are displayed
