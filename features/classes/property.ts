import { Actor } from '@serenity-js/core';
import { BookingSchedule } from './booking-schedule';

class Property {
  private _name: string;
  private _owners: Actor[];
  private _isListed: boolean;
  private _bookingSchedule: BookingSchedule[];

  constructor(
      name: string, 
      owners: Actor[] = [], 
      isListed: boolean = false
    ) {
    this._name = name;
    this._owners = owners;
    this._isListed = isListed;
    this._bookingSchedule = [];
  }

  get owners() {
    return this._owners;
  }

  get bookingSchedule() {
    return this._bookingSchedule;
  }

  addBookingSchedule(bookingSchedule: BookingSchedule) {
    this._bookingSchedule.push(bookingSchedule);
  }
}

export { Property };