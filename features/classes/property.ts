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
      isListed: boolean = false,
      bookingScheduleList: BookingSchedule[] = []
    ) {
    this._name = name;
    this._owners = owners;
    this._isListed = isListed;
    this._bookingScheduleList = bookingScheduleList;
  }

  get owners() {
    return this._owners;
  }

  get bookingSchedule() {
    return this._bookingScheduleList;
  }

  addBookingSchedule(bookingSchedule: BookingSchedule) {
    // check if the end date is greater than or equal to the start date
    if (bookingSchedule.endDate >= bookingSchedule.startDate) {
      // check if the start date and end date are today or in the future
      if (bookingSchedule.endDate >= new Date() && bookingSchedule.startDate >= new Date()) {
        // check for overlapping schedules
        const overlapping = this._bookingScheduleList.some(existingSchedule => {
          return (bookingSchedule.startDate < existingSchedule.endDate && bookingSchedule.endDate > existingSchedule.startDate);
        });
        // if there are no overlapping schedules, add the new schedule
        if (!overlapping) {
          this._bookingScheduleList.push(bookingSchedule);
        }
      }
    }
  }

  updateBookinhSchedule(index: number, startDate: Date, endDate: Date) {
    // check if the end date is greater than or equal to the start date
    if (endDate >= startDate) {
      // check if the start date and end date are today or in the future
      if (endDate >= new Date() && startDate >= new Date()) {
        // check for overlapping schedules
        const overlapping = this._bookingScheduleList.some((existingSchedule, i) => {
          return (i !== index && startDate < existingSchedule.endDate && endDate > existingSchedule.startDate);
        });
        // if there are no overlapping schedules, update the schedule
        if (!overlapping) {
          this._bookingScheduleList[index] = new BookingSchedule(startDate, endDate);
        }
      }
    }
  }
}

export { Property };