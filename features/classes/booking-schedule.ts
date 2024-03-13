class BookingSchedule {
  private _startDate: Date;
  private _endDate: Date;

  constructor(startDate: Date, endDate: Date) {
    this._startDate = startDate;
    this._endDate = endDate;
  }

  get startDate() {
    return this._startDate;
  }

  get endDate() {
    return this._endDate;
  }
}

export { BookingSchedule };