import { WageEmployee } from "./WageEmployee";
export const MIN_SALES_VALUE: number = 10000;

export class SalesPerson extends WageEmployee {
    constructor(id: number, name: string, birthYear: number, department:string,
        basicSalary: number, wage: number, hours: number, private _salesValue: number, private _percentValue: number) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
    }

    get salesValue() {
        return this._salesValue;
    }

    set salesValue(salesValue: number) {
        this._salesValue = salesValue;
    }

    get percentValue() {
        return this._percentValue;
    }

    set percentValue(percentValue) {
        this._percentValue = percentValue;
    }

    computeSalary(): number {
        if(this.salesValue < MIN_SALES_VALUE) {
            return this.basicSalary + this.hours * this.wage;
        } else {
            return super.computeSalary() + this._salesValue * (this._percentValue / 100);
        }
    }
}