"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesPerson = exports.MIN_SALES_VALUE = void 0;
const WageEmployee_1 = require("./WageEmployee");
exports.MIN_SALES_VALUE = 10000;
class SalesPerson extends WageEmployee_1.WageEmployee {
    constructor(id, name, birthYear, department, basicSalary, wage, hours, _salesValue, _percentValue) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
        this._salesValue = _salesValue;
        this._percentValue = _percentValue;
    }
    get salesValue() {
        return this._salesValue;
    }
    set salesValue(salesValue) {
        this._salesValue = salesValue;
    }
    get percentValue() {
        return this._percentValue;
    }
    set percentValue(percentValue) {
        this._percentValue = percentValue;
    }
    computeSalary() {
        if (this.salesValue < exports.MIN_SALES_VALUE) {
            return this.basicSalary + this.hours * this.wage;
        }
        else {
            return super.computeSalary() + this._salesValue * (this._percentValue / 100);
        }
    }
}
exports.SalesPerson = SalesPerson;
//# sourceMappingURL=SalesPerson.js.map