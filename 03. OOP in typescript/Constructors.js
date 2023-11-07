var Employee = /** @class */ (function () {
    // default constructor 
    // constructor(){
    //     this.empId = 101;
    //     this.empName = "Bhuwan";
    //     this.empSalary = 80000;
    // }
    // paramerized constructor 
    function Employee(id, name, salary, acc) {
        if (salary === void 0) { salary = 5000; }
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
        this.empAccount = acc;
    }
    Employee.prototype.Display = function () {
        console.log("Employee { ID:: ".concat(this.empId, ", Name:: ").concat(this.empName, ", Salary:: ").concat(this.empSalary, ", Account No:: ").concat(this.empAccount, " }\n"));
    };
    return Employee;
}());
var emp1 = new Employee(101, "Bhuwan", 90000, 789532316831);
var emp2 = new Employee(102, "Ram", 25000);
var emp3 = new Employee(102, "Ram");
emp1.Display();
emp2.Display();
emp3.Display();
