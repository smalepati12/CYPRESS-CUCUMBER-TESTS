Feature: Saucedemo purchase items
    @focus
    Scenario: User navigates saucedemo page and complete purchasing items
        Given user open saucedemo page
        Then user see "Swag Labs" in the title
        And user login as Satandard user
        Then user see listed items
        And user sort the items to high to low
        Then user select cheapest & costlies items to basket
        And user open my basket
        Then user go to checkout
        And  user enter details and Finish the purchase

    



