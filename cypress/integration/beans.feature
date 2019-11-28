#language: en
Feature: Show coffee beans in the application
  Als Bohnenverkäufer möchte in der Anwendung meine Bohnenarten sehen und bearbeiten können
  As a seller of coffee beans I want to see and edit coffee beans in my application

  Background:
    Given the application is open
    And there are the following beans in the application
      | Id | Bean      | Price in Euro | Margin in Percent | Selling Price in Euro |
      | 1  | Ethiopia | 10.00         | 30.00             | 13.00                 |


  Scenario Outline: : Every price change is visible in the application
    When the seller sets the price to "<Price>" Euro
    Then following beans are visible in the application
      | Bean      | Price in Euro | Margin in Percent | Selling Price in Euro |
      | Ethiopia | <Price>       | <Margin>          | 13.00                 |
    Examples: :
  | Price         | Margin   |
  | 0.10          | 12900.00 |
  | 1.10          | 1081.82  |
  | 2.51          | 417.93   |
  | 5.00          | 160.00   |
