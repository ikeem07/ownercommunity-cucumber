Feature: HOA Staff

  Each community can designate special members, known as HOA (Homeowners' Association) staff, who are responsible for managing properties and resources within their respective community. 
    HOA staff members have the authority to add shared resources for a community. This responsibility encompasses creating booking schedules for these resources. 
    HOA staff members possess full control over all aspects of properties within their community. This authority extends to adding, updating, and removing property listings and booking schedules. 
    HOA staff members possess full control over all aspects of community resources. This authority extends to adding, updating, and removing resource listings and resource booking schedules. 

  Rule: A shared resource can only be managed by an HOA staff member.

    Scenario: An HOA staff member adds a shared resource for their community.
      Given the user is a member of the community
      And the user is an HOA staff member
      When the user adds a shared resource for their community
      Then the shared resource is successfully added to the community

    Scenario: An HOA staff member updates a shared resource for their community.
      Given the user is a member of the community
      And the user is an HOA staff member
      When the user updates a shared resource for their community
      Then the shared resource is successfully updated for the community

    Scenario: An HOA staff member removes a shared resource from their community.
      Given the user is a member of the community
      And the user is an HOA staff member
      When the user removes a shared resource from their community
      Then the shared resource is successfully removed from the community

    Scenario: An HOA staff member adds a booking schedule for a shared resource for their community.
      Given the user is a member of the community
      And the user is an HOA staff member
      When the user adds a booking schedule for a shared resource for their community
      Then the booking schedule is successfully added for the shared resource
    
    Scenario: An HOA staff member updates a booking schedule for a shared resource for their community.
      Given the user is a member of the community
      And the user is an HOA staff member
      When the user updates a booking schedule for a shared resource for their community
      Then the booking schedule is successfully updated for the shared resource

    Scenario: An HOA staff member removes a booking schedule for a shared resource from their community.
      Given the user is a member of the community
      And the user is an HOA staff member
      When the user removes a booking schedule for a shared resource from their community
      Then the booking schedule is successfully removed from the shared resource

  Rule: All properties can be managed by an HOA staff member.

    Scenario: An HOA staff member adds a property for their community.
      Given the user is a member of the community
      And the user is an HOA staff member
      When the user adds a property for their community
      Then the property is successfully added to the community

    Scenario: An HOA staff member updates a property for their community.
      Given the user is a member of the community
      And the user is an HOA staff member
      When the user updates a property for their community
      Then the property is successfully updated for the community

    Scenario: An HOA staff member removes a property from their community.
      Given the user is a member of the community
      And the user is an HOA staff member
      When the user removes a property from their community
      Then the property is successfully removed from the community

    Scenario: An HOA staff member adds a booking schedule for a property for their community.
      Given the user is a member of the community
      And the user is an HOA staff member
      When the user adds a booking schedule for a property for their community
      Then the booking schedule is successfully added for the property

    Scenario: An HOA staff member updates a booking schedule for a property for their community.
      Given the user is a member of the community
      And the user is an HOA staff member
      When the user updates a booking schedule for a property for their community
      Then the booking schedule is successfully updated for the property

    Scenario: An HOA staff member removes a booking schedule for a property from their community.
      Given the user is a member of the community
      And the user is an HOA staff member
      When the user removes a booking schedule for a property from their community
      Then the booking schedule is successfully removed from the property

  Rule: ToDo: Negative scenarios