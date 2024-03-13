class BookingSchedule {
  private _startDate: Date;
  private _endDate: Date;

  constructor(startDate: Date, endDate: Date) {
    this._startDate = startDate;
    this._endDate = endDate;
  }
}

export { BookingSchedule };