"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingSchedule = void 0;
class BookingSchedule {
    constructor(startDate, endDate) {
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
exports.BookingSchedule = BookingSchedule;
//# sourceMappingURL=booking-schedule.js.map