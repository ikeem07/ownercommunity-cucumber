Feature: Property Owner

  John is a property owner

  Rule: Property owners can create booking schedules for their properties.
    
    @tryThis
    Scenario: Property owner creates a booking schedule for their property
      Given John has a property listed
      When he creates a booking schedule for the property
      Then the booking schedule should be created successfully

    @tryThis
    Scenario: Property owner creates a booking schedule for their property with a past date
      Given John has a property listed
      When he creates a booking schedule for the property with a past date
      Then the booking schedule should not be created successfully

    @tryThis
    Scenario: Property owner creates a second booking schedule for their property
      Given John has a property listed with a booking schedule
      When he creates a booking schedule for the property
      Then the second booking schedule should be created successfully

    #@tryThis
    # Scenario: Property owner creates a booking schedule for their property that overlaps with an existing schedule
    #   Given John has a property listed with a booking schedule
    #   When he creates a booking schedule for the property that overlaps with an existing schedule
    #   Then the second booking schedule should not be created successfully
  
  Rule: Property owners can update booking schedules for their properties.

    @tryThis
    Scenario: Property owner updates a booking schedule for their property
      Given John has a property listed with a booking schedule
      When he updates a booking schedule for the property
      Then the booking schedule should be updated successfully

    @tryThis
    Scenario: Property owner updates a booking schedule for their property with a past date
      Given John has a property listed with a booking schedule
      When he updates a booking schedule for the property with a past date
      Then the booking schedule should not be updated successfully

    @tryThis
    Scenario: Property owner updates a booking schedule for their property that overlaps with an existing schedule
      Given John has a property listed with two booking schedules
      When he updates a booking schedule for the property that overlaps with an existing schedule
      Then the booking schedule should not be updated successfully

    Scenario: Property owner updates the start date of a booking schedule for their property, which includes past dates
      Given John has a property listed with a booking schedule
      When he updates the start date of a booking schedule for the property, which includes past dates
      Then the booking schedule should not be updated successfully

    Scenario: Property owner updates the end date of a booking schedule for their property, which includes past dates
      Given John has a property listed with a booking schedule
      When he updates the end date of a booking schedule for the property, which includes past dates
      Then the booking schedule should be updated successfully

    Scenario: Property owner updates a booking schedule for their property with a past start date and end date
      Given John has a property listed with a booking schedule
      When he updates a booking schedule for the property with a past start date and end date
      Then the booking schedule should not be updated successfully

  Rule: Property owners can delete booking schedules for their properties.

    Scenario: Property owner deletes a booking schedule for their property
      Given John has a property listed for rent
      When he deletes a booking schedule for the property
      Then the booking schedule should be deleted successfully

    Scenario: Property owner deletes a booking schedule for their property with a past date
      Given John has a property listed for rent
      When he deletes a booking schedule for the property with a past date
      Then the booking schedule should not be deleted successfully

  Rule: Property owners can delete their properties that have booking schedule(s).

    Scenario: Property owner deletes a property with booking schedule(s)
      Given John has a property listed for rent
      And the property has booking schedule(s)
      When he deletes the property
      Then the property should be deleted successfully
      And the booking schedules for the property should be deleted successfully

  Rule: Property owners cannot book their own property.

    Scenario: Property owner books their own property
      Given John has a property listed for rent
      When he books his own property
      Then the booking should not be created successfully