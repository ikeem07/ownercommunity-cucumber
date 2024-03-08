Feature: HOA Staff

  The Smith Household is a community member

  Rule: Members of a community can only book resources shared within their community.

    Scenario: A member from a community books a resource shared within their community
      Given the Smith Household is a member of the Sunset Court community
      And a resource is shared within the Sunset Court community
      When the member books the resource
      Then the booking is successful

  Rule: Members of a community can only view resources shared within their community.

    Scenario: A member from a community searches for a resource shared within their community
      Given the Smith Household is a member of the Sunset Court community
      And a resource is shared within the Sunset Court community
      When the member searches for the resource by name
      Then the resource is found

    Scenario: A member from one community searches for a resource shared within another community
      Given the Smith Household is a member of the Sunset Court community
      And a resource is shared within the Hyde Park community
      When the Smith Household searches for the resource in the Hyde Park community
      Then the resource is not found

  Rule: Members of one community can book properties from another community

    Scenario: A member from one community books a property from another community
      Given the Smith Household is a member of the Sunset Court community
      And a property listed within the Hyde Park community
      When the Smith Household books the property in the Hyde Park community
      Then the booking is successful

  Rule: Members of one community can view properties from another community

    Scenario: A member from one community searches for a property listed within another community
      Given the Smith Household is a member of the Sunset Court community
      And a property listed within the Hyde Park community
      When the Smith Household searches for the property in the Hyde Park community
      Then the property is found


    