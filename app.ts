import { SalesPerson } from "./SalesPerson";
import { WageEmployee } from "./WageEmployee";
import { Company } from "./Company";
import { Employee } from "./Employee";

const company: Company = new Company([]);
const employee: WageEmployee = new WageEmployee(123, "Vasya", 2000, "QA", 10000, 100,50);
const employee2: WageEmployee = new WageEmployee(124, "Peter", 1950, "QA", 11000, 100, 12);
const employee3: WageEmployee = new WageEmployee(125, "Dmitrii", 1980, "QA", 12000, 100, 19);
const employee4: WageEmployee = new WageEmployee(126, "Vladimir", 2005, "QA", 13000, 100, 68);
const salesEmployee: SalesPerson = new SalesPerson(127, "Nikolay", 1998, "Sales Management", 15000, 150, 6, 7000, 5);
const salesEmployee2: SalesPerson = new SalesPerson(128, "Nikolay", 1993, "Sales Management", 15000, 150, 0, 13000, 5);

company.addEmployee(employee);
company.addEmployee(employee2);
company.addEmployee(employee3);
company.addEmployee(employee4);
company.addEmployee(salesEmployee);
company.addEmployee(salesEmployee2);

console.log(company);


const res: Employee[] = company.getEmployeeBySalary(5000, 50000);
res.forEach(element => {
    console.log(element.birthYear);
});

const isWorking: Employee | null = company.getEmployee(125);
if(isWorking != null) {
    console.log(`${isWorking.name} is working in the Company`)
} else {
    console.log('There is no empolyee in the Company with this "id"');
}

const isWorking2: Employee | null = company.getEmployee(555);
if(isWorking2 != null) {
    console.log(`${isWorking2.name} is working in the Company`)
} else {
    console.log('There is no empolyee in the Company with this "id"');
}

console.log(`Company's budget for a mounth is: ${company.computeBudget()}`);

console.log(company.removeEmployee(125));
console.log(company);
