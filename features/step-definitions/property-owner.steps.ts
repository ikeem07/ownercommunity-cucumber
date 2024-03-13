import { Before, Given, When, Then } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';
import { Community } from '../classes/community';
import { Property } from '../classes/property';
import { BookingSchedule } from '../classes/booking-schedule';
import assert from 'assert';

Before(function () {
  this.community = new Community('The Community');
})

Given('{actor} has a property listed', function (actor: Actor) {
  this.community.addProperty(new Property('My Property', [actor], true));
});

When('{pronoun} creates a booking schedule for the property', function (actor: Actor) {
  const startDate = new Date()
  startDate.setDate(startDate.getDate() + 1);
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 7);

  const property = this.community.propertyList[0];
  const bookingSchedule = new BookingSchedule(startDate, endDate);

  if (property.owners.includes(actor)) {
    property.addBookingSchedule(bookingSchedule);
  }
});

Then('the booking schedule should be created successfully', function () {
  // assert that the booking schedule has been created
  assert.strictEqual(this.community.propertyList[0].bookingSchedule.length, 1);
});

