Feature: Product Search

  Scenario: Search for product
    Given the catalog page has loaded
    When I search for a product with the name "blouse"
    Then found products are listed

  Scenario: Select a product
    Given found products are listed
    When I click on a product
    Then I am on the product details page

  Scenario: Select a different standard
    Given I am on the product details page
    When I click on a product detail modification
    Then The product picture updates

  Scenario: Add a product to the cart
    Given I am on the product details page
    When I click on the Add to Cart button
    Then I am notified that the product has been added to my cart



#      Things to test:
#    Access http://automationpractice.com/
#    Search for a product
#    Select a product
#    Select a different standard
#    Add it to a cart