Feature: HOA Staff

    Sarah is an HOA staff member 

  Rule: A shared resource can only be managed by an HOA staff member.

    Scenario: An HOA staff member adds a shared resource for their community.
      Given Sarah is a member of the Fresh Springs community
      When she adds a shared resource for the community
      Then the shared resource is successfully added to the community

    Scenario: An HOA staff member updates a shared resource for their community.
      Given Sarah is a member of the Fresh Springs community
      When she updates a shared resource for the community
      Then the shared resource is successfully updated for the community

    Scenario: An HOA staff member removes a shared resource from their community.
      Given Sarah is a member of the Fresh Springs community
      When she removes a shared resource from the community
      Then the shared resource is successfully removed from the community

    Scenario: An HOA staff member adds a booking schedule for a shared resource for their community.
      Given Sarah is a member of the Fresh Springs community
      When she adds a booking schedule for a shared resource for the community
      Then the booking schedule is successfully added for the shared resource
    
    Scenario: An HOA staff member updates a booking schedule for a shared resource for their community.
      Given Sarah is a member of the Fresh Springs community
      When she updates a booking schedule for a shared resource for the community
      Then the booking schedule is successfully updated for the shared resource

    Scenario: An HOA staff member removes a booking schedule for a shared resource from their community.
      Given Sarah is a member of the Fresh Springs community
      When she removes a booking schedule for a shared resource from the community
      Then the booking schedule is successfully removed from the shared resource

  Rule: All properties can be managed by an HOA staff member.

    Scenario: An HOA staff member adds a property for their community.
      Given Sarah is a member of the Fresh Springs community
      When she adds a property for the community
      Then the property is successfully added to the community

    Scenario: An HOA staff member updates a property for their community.
      Given Sarah is a member of the Fresh Springs community
      When she updates a property for the community
      Then the property is successfully updated for the community

    Scenario: An HOA staff member removes a property from their community.
      Given Sarah is a member of the Fresh Springs community
      When she removes a property from the community
      Then the property is successfully removed from the community

    Scenario: An HOA staff member adds a booking schedule for a property for their community.
      Given Sarah is a member of the Fresh Springs community
      When she adds a booking schedule for a property for the community
      Then the booking schedule is successfully added for the property

    Scenario: An HOA staff member updates a booking schedule for a property for their community.
      Given Sarah is a member of the Fresh Springs community
      When she updates a booking schedule for a property for the community
      Then the booking schedule is successfully updated for the property

    Scenario: An HOA staff member removes a booking schedule for a property from their community.
      Given Sarah is a member of the Fresh Springs community
      When she removes a booking schedule for a property from the community
      Then the booking schedule is successfully removed from the property

  Rule: HOA staff cannot modify booking schedules in the past [ToDo: Add rule to business requirements]

    Scenario: An HOA staff member attempts to update a booking schedule for a shared resource for their community in the past.
      Given the user is a member of the community
      And the user is an HOA staff member
      And the booking schedule is in the past
      When the user attempts to update a booking schedule for a shared resource for their community
      Then the booking schedule is not successfully updated for the shared resource

    Scenario: An HOA staff member attempts to remove a booking schedule for a shared resource from their community in the past.
      Given the user is a member of the community
      And the user is an HOA staff member
      And the booking schedule is in the past
      When the user attempts to remove a booking schedule for a shared resource from their community
      Then the booking schedule is not successfully removed from the shared resource

    Scenario: An HOA staff member attempts to update a booking schedule for a property for their community in the past.
      Given the user is a member of the community
      And the user is an HOA staff member
      And the booking schedule is in the past
      When the user attempts to update a booking schedule for a property for their community
      Then the booking schedule is not successfully updated for the property

    Scenario: An HOA staff member attempts to remove a booking schedule for a property from their community in the past.
      Given the user is a member of the community
      And the user is an HOA staff member
      And the booking schedule is in the past
      When the user attempts to remove a booking schedule for a property from their community
      Then the booking schedule is not successfully removed from the property

    
    