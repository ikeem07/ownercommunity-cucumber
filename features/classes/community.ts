import { Property } from './property';

class Community {
  private _name: string;
  private _propertyList: Property[];

  constructor(name: string, propertyList: Property[] = []) {
    this._name = name;
    this._propertyList = propertyList;
  }

  get propertyList() {
    return this._propertyList;
  }

  addProperty(property: Property) {
    this._propertyList.push(property);
  }
}

export { Community };