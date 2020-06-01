Feature: Amazon customer Journey
  As a user I would like to search for
  an items on amazon so I can view in basket

  Background:
    Given Amazon.co.uk is open

  Scenario: Sign into Amazon.co.uk
    When I click Sign-in
    And enter valid username
    And I Continue
    And enter valid password
  # And I signed in
  # Then I am logged in

  Scenario: Search for product add to basket
    Given when I search for "iceworks 5000"
    When the search results are displayed
    Then the search results has the "iceworks 5000" in it

  Scenario: Check basket total
    Given when I search for "iceworks 5000"
    When I add "Iceworks 5000" to my basket
    And I check my basket total
    Then it should match the price of the item added into basket
