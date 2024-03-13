"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
class Property {
    constructor(name, owners = [], isListed = false) {
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
    addBookingSchedule(bookingSchedule) {
        this._bookingSchedule.push(bookingSchedule);
    }
}
exports.Property = Property;
//# sourceMappingURL=property.js.map