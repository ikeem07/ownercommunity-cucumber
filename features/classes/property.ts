import { Actor } from '@serenity-js/core';
import { BookingSchedule } from './booking-schedule';

class Property {
  private _name: string;
  private _owners: Actor[];
  private _isListed: boolean;
  private _bookingScheduleList: BookingSchedule[];

  constructor(
      name: string, 
      owners: Actor[] = [], 
      isListed: boolean = false
    ) {
    this._name = name;
    this._owners = owners;
    this._isListed = isListed;
    this._bookingScheduleList = [];
  }

  get owners() {
    return this._owners;
  }

  get bookingSchedule() {
    return this._bookingScheduleList;
  }

  addBookingSchedule(bookingSchedule: BookingSchedule) {
    if (bookingSchedule.endDate >= bookingSchedule.startDate) {
      if (bookingSchedule.endDate > new Date() && bookingSchedule.startDate > new Date()) {
        this._bookingScheduleList.push(bookingSchedule);
      }
    }
  }
}

export { Property };