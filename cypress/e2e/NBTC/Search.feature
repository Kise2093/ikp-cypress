Feature: NBTC
  Scenario: Search for a keyword All
    Given I am on the NTBC homepage
    When left bar Go to "ระบบจัดการของกลาง" page
    And input type "วิทยุสื่อสาร"
    And input brand "BAOFENG"
    And input model "UV5R"
    # And input startdate "24/04/2563"
    # And input enddate "24/04/2563"
    And search
    And click detail "1"
    Then check detail type
    Then check detail brand
    Then check detail model
    And edit
  
  Scenario: Search for a keyword Type
    Given I am on the NTBC homepage
    When left bar Go to "ระบบจัดการของกลาง" page
    And input type "วิทยุสื่อสาร"
    # And input startdate "24/04/2563"
    # And input enddate "24/04/2563"
    And search
    And click detail "1"
    Then check detail type
    And edit

  Scenario: Search for a keyword Brand
    Given I am on the NTBC homepage
    When left bar Go to "ระบบจัดการของกลาง" page
    And input brand "BAOFENG"
    # And input startdate "24/04/2563"
    # And input enddate "24/04/2563"
    And search
    And click detail "1"
    Then check detail brand
    And edit

  Scenario: Search for a keyword Model
    Given I am on the NTBC homepage
    When left bar Go to "ระบบจัดการของกลาง" page
    And input model "UV5R"
    # And input startdate "24/04/2563"
    # And input enddate "24/04/2563"
    And search
    And click detail "1"
    Then check detail model
    And edit

  Scenario: Search for a Date
    Given I am on the NTBC homepage
    When left bar Go to "ระบบจัดการของกลาง" page
    And input startdate "27/02/2566"
    And input enddate "27/02/2566"
    And search
    Then I should see search results within the date range