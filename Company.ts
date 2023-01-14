import { Employee } from "./Employee";
import { WageEmployee } from "./WageEmployee";
import { SalesPerson } from "./SalesPerson";

export class Company {
    constructor(private _employees: Employee[]) {

    }

    addEmployee(employee: Employee): void {
        if(!this._employees.some(emp => employee.id === emp.id)) {
            this._employees.push(employee);
        }
    }

    removeEmployee(id: number): boolean {
        const sizeBefore: number = this._employees.length;
        const findEmployee: number = this._employees.findIndex((empl) => empl.id === id);
        this._employees.splice(findEmployee, 1);
        return sizeBefore !== this._employees.length;
    }

    getEmployee(id: number): Employee | null {
        const empl: Employee[] = this._employees.filter((emp: Employee) => emp.id === id);
        return (empl.length === 0) ? null : empl[0];
    }

    getEmployeeBySalary(from: number, to: number): Employee[] {
        const empl: Employee[] = this._employees.filter((emp: Employee) => {
            const salary = emp.computeSalary();
            return salary >= from && salary <= to;
        })

        return empl.sort((a: Employee, b: Employee) => a.birthYear > b.birthYear ? 1 : -1);
    }

    computeBudget(): number {
        return this._employees.reduce((budget, empl) => {
            return budget+empl.computeSalary();
        }, 0)
    }
}