"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(_employees) {
        this._employees = _employees;
    }
    addEmployee(employee) {
        if (!this._employees.some(emp => employee.id === emp.id)) {
            this._employees.push(employee);
        }
    }
    removeEmployee(id) {
        const sizeBefore = this._employees.length;
        const findEmployee = this._employees.findIndex((empl) => empl.id === id);
        this._employees.splice(findEmployee, 1);
        return sizeBefore !== this._employees.length;
    }
    getEmployee(id) {
        const empl = this._employees.filter((emp) => emp.id === id);
        return (empl.length === 0) ? null : empl[0];
    }
    getEmployeeBySalary(from, to) {
        const empl = this._employees.filter((emp) => {
            const salary = emp.computeSalary();
            return salary >= from && salary <= to;
        });
        return empl.sort((a, b) => a.birthYear > b.birthYear ? 1 : -1);
    }
    computeBudget() {
        return this._employees.reduce((budget, empl) => {
            return budget + empl.computeSalary();
        }, 0);
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map