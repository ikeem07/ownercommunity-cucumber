"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const community_1 = require("../classes/community");
const property_1 = require("../classes/property");
const booking_schedule_1 = require("../classes/booking-schedule");
const assert_1 = __importDefault(require("assert"));
(0, cucumber_1.Before)(function () {
    this.community = new community_1.Community('The Community');
});
(0, cucumber_1.Given)('{actor} has a property listed', function (actor) {
    this.community.addProperty(new property_1.Property('My Property', [actor], true));
});
(0, cucumber_1.When)('{pronoun} creates a booking schedule for the property', function (actor) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 1);
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    const property = this.community.propertyList[0];
    const bookingSchedule = new booking_schedule_1.BookingSchedule(startDate, endDate);
    if (property.owners.includes(actor)) {
        property.addBookingSchedule(bookingSchedule);
    }
});
(0, cucumber_1.When)('{pronoun} creates a booking schedule for the property with a past date', function (actor) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 1);
    const property = this.community.propertyList[0];
    const bookingSchedule = new booking_schedule_1.BookingSchedule(startDate, endDate);
    if (property.owners.includes(actor)) {
        property.addBookingSchedule(bookingSchedule);
    }
});
(0, cucumber_1.Then)('the booking schedule should be created successfully', function () {
    assert_1.default.strictEqual(this.community.propertyList[0].bookingSchedule.length, 1);
});
(0, cucumber_1.Then)('the booking schedule should not be created successfully', function () {
    assert_1.default.strictEqual(this.community.propertyList[0].bookingSchedule.length, 0);
});
//# sourceMappingURL=property-owner.steps.js.map