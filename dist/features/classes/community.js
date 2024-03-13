"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Community = void 0;
class Community {
    constructor(name, propertyList = []) {
        this._name = name;
        this._propertyList = propertyList;
    }
    get propertyList() {
        return this._propertyList;
    }
    addProperty(property) {
        this._propertyList.push(property);
    }
}
exports.Community = Community;
//# sourceMappingURL=community.js.map