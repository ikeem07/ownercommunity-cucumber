Feature: Property Owner

  Users of the owner community website should be able to add a booking schedule to their properties. This is so other users can schedule your property for rent. 
    Any user who has listed a property should have the capability to establish rental dates for that property, which other users can then book for rental purposes. 
    Rental dates must be limited to dates from today onwards, preventing any bookings for dates that have already passed. 
    \When establishing a range of rental dates for a property, blackout dates should be prohibited. 
    Should the user wish to designate dates when the property cannot be rented, they must create distinct rental schedules for those periods. 
      Example 1: 
        Problem: The user wants to create rental dates from March 1st to March 31st, but they will need the property from March 10th to the 12th. 
      Solution: The user creates two rental schedules; one from March 1st to March 9th and another from March 13th to March 31st. 
        Users should have the capability to generate multiple rental schedules for a single property. 
    The creator of each rental schedule should be able to define a different daily rental cost for each specific schedule.

  Rule: Property owners can create booking schedules for their properties.
    
    Scenario: Property owner creates a booking schedule for their property
      Given the user is a property owner
      And the property is listed
      When the owner creates a booking schedule for the property
      Then the booking schedule should be created successfully

    Scenario: Property owner creates a booking schedule for their property with a past date
      Given the user is a property owner
      And the property is listed
      When the owner creates a booking schedule for the property with a past date
      Then the booking schedule should not be created successfully

    Scenario: Property owner creates a second booking schedule for their property
      Given the user is a property owner
      And the property is listed
      When the owner creates a second booking schedule for the property
      Then the second booking schedule should be created successfully

    Scenario: Property owner creates a booking schedule for their property that overlaps with an existing schedule
      Given the user is a property owner
      And the property is listed
      When the owner creates a booking schedule for the property that overlaps with an existing schedule
      Then the booking schedule should not be created successfully
  
  Rule: Property owners can update booking schedules for their properties.

  Rule: Property owners can delete booking schedules for their properties.