"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
class Property {
    constructor(name, owners = [], isListed = false) {
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
    addBookingSchedule(bookingSchedule) {
        if (bookingSchedule.endDate >= bookingSchedule.startDate) {
            if (bookingSchedule.endDate > new Date() && bookingSchedule.startDate > new Date()) {
                this._bookingScheduleList.push(bookingSchedule);
            }
        }
    }
}
exports.Property = Property;
//# sourceMappingURL=property.js.map