Feature: HOA Staff

  Community members should have the capability to book shared community resources. 
    Resource bookings are limited to community members. 
    Users in a particular community should not have access to view resources shared within other communities.

  Rule: Members of a community can only book resources shared within their community.

    Scenario: A member from a community books a resource shared within their community
      Given a member from a community
      And a resource shared within the member's community
      When the member books the resource
      Then the booking is successful

    Scenario: A member from one community searches for a resource shared within another community
      Given a member from one community
      And a resource shared within another community
      When the member searches for the resource
      Then the resource is not found

    