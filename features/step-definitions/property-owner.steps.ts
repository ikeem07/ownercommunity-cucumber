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

Given('{actor} has a property listed with a booking schedule', function (actor: Actor) {
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 7);

  this.community.addProperty(new Property('My Property', [actor], true, [new BookingSchedule(new Date(), endDate)]));
});

When('{pronoun} creates a booking schedule for the property', function (actor: Actor) {
  const startDate = new Date()
  startDate.setDate(startDate.getDate() + 8);
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 14);

  const property = this.community.propertyList[0];
  const bookingSchedule = new BookingSchedule(startDate, endDate);

  if (property.owners.includes(actor)) {
    property.addBookingSchedule(bookingSchedule);
  }
});

When('{pronoun} creates a booking schedule for the property with a past date', function (actor: Actor) {
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 7);
  const endDate = new Date()
  endDate.setDate(endDate.getDate() - 1);

  const property = this.community.propertyList[0];
  const bookingSchedule = new BookingSchedule(startDate, endDate);

  if (property.owners.includes(actor)) {
    property.addBookingSchedule(bookingSchedule);
  }
});

When('{pronoun} updates a booking schedule for the property', function (actor: Actor) {
  const startDate = new Date()
  startDate.setDate(startDate.getDate() + 15);
  this.bookingStartDate = startDate;
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 21);
  this.bookingEndDate = endDate;

  const property = this.community.propertyList[0];

  if (property.owners.includes(actor)) {
    property.updateBookinhSchedule(0, startDate, endDate);
  }
});

Then('the booking schedule should be created successfully', function () {
  assert.strictEqual(this.community.propertyList[0].bookingSchedule.length, 1);
});

Then('the booking schedule should not be created successfully', function () {
  assert.strictEqual(this.community.propertyList[0].bookingSchedule.length, 0);
});

Then('the second booking schedule should be created successfully', function () {
  assert.strictEqual(this.community.propertyList[0].bookingSchedule.length, 2);
});

Then('the booking schedule should be updated successfully', function () {
  assert.strictEqual(this.community.propertyList[0].bookingSchedule[0].startDate, this.bookingStartDate);
  assert.strictEqual(this.community.propertyList[0].bookingSchedule[0].endDate, this.bookingEndDate);
});

