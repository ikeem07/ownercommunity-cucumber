import { Before, Given, When, Then } from '@cucumber/cucumber';
import { Actor, TakeNotes, notes, actorInTheSpotlight, Ability } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions'
import { Community } from '../classes/community';
import { Property } from '../classes/property';
import { BookingSchedule } from '../classes/booking-schedule';
import assert from 'assert';

Before(function () {
  this.community = new Community('The Community');
})

Given('{actor} has a property listed', function (actor: Actor) {
  const property = new Property('My Property', [actor], true);

  actor
    .whoCan(
      TakeNotes.usingAnEmptyNotepad(),
      ManageCommunityProperty.using(property)
    )
});

Given('{actor} has a property listed with a booking schedule', function (actor: Actor) {
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 7);

  this.community.addProperty(new Property('My Property', [actor], true, [new BookingSchedule(new Date(), endDate)]));
});

Given('{actor} has a property listed with two booking schedules', function (actor: Actor) {
  const endDate1 = new Date()
  const startDate2 = new Date()
  const endDate2 = new Date()
  endDate1.setDate(endDate1.getDate() + 7);
  startDate2.setDate(startDate2.getDate() + 15);
  endDate2.setDate(endDate2.getDate() + 21);

  this.community.addProperty(
    new Property(
      'My Property', 
      [actor], 
      true, 
      [
        new BookingSchedule(new Date(), endDate1), 
        new BookingSchedule(startDate2, endDate2)
      ]
    )
  );
});

When('{pronoun} creates a booking schedule for the property', function (actor: Actor) {
  const property = actor.abilityTo(ManageCommunityProperty).get();

  const startDate = new Date()
  startDate.setDate(startDate.getDate() + 8);
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 14);
  const bookingSchedule = new BookingSchedule(startDate, endDate);

  property.addBookingSchedule(bookingSchedule);
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

When('{pronoun} updates a booking schedule for the property with a past date', function (actor: Actor) {
  this.currentBookingStartDate = this.community.propertyList[0].bookingSchedule[0].startDate;
  this.currentBookingEndDate = this.community.propertyList[0].bookingSchedule[0].endDate;
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 7);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 2);

  const property = this.community.propertyList[0];

  if (property.owners.includes(actor)) {
    property.updateBookinhSchedule(0, startDate, endDate);
  }
});

When('{pronoun} updates a booking schedule for the property that overlaps with an existing schedule', function (actor: Actor) {
  this.currentBookingStartDate = this.community.propertyList[0].bookingSchedule[0].startDate;
  this.currentBookingEndDate = this.community.propertyList[0].bookingSchedule[0].endDate;
  const startDate = new Date();
  startDate.setDate(this.community.propertyList[0].bookingSchedule[1].startDate.getDate() + 1);
  const endDate = new Date();
  endDate.setDate(this.community.propertyList[0].bookingSchedule[1].endDate.getDate() - 1);

  const property = this.community.propertyList[0];

  if (property.owners.includes(actor)) {
    property.updateBookinhSchedule(0, startDate, endDate);
  }
});

Then('the booking schedule should be created successfully', async function () {
  await actorInTheSpotlight().attemptsTo(
    Ensure.that(BookingScheduleCount.forProperty(), equals(1))
  );
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

Then('the booking schedule should not be updated successfully', function () {
  assert.strictEqual(this.community.propertyList[0].bookingSchedule[0].startDate, this.currentBookingStartDate);
  assert.strictEqual(this.community.propertyList[0].bookingSchedule[0].endDate, this.currentBookingEndDate);
});

class ManageCommunityProperty extends Ability {
  static using(property: Property) {
    return new ManageCommunityProperty(property);
  }

  public constructor(
    private property: Property
  ) {
    super();
  }

  set(property: Property) {
    this.property = property;
  }

  get() {
    return this.property;
  }
}

class BookingScheduleCount {
  static async forProperty() {
    const property = actorInTheSpotlight().abilityTo(ManageCommunityProperty).get();
    const bookingSchedule = property.bookingSchedule;
    return bookingSchedule.length;
  }
}