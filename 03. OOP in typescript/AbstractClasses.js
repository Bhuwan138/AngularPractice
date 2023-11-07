var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employees1 = /** @class */ (function () {
    function Employees1(id, name, salary) {
        if (salary === void 0) { salary = 5000; }
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
    }
    Employees1.prototype.Display = function () {
        console.log("Employee { ID:: ".concat(this.empId, ", Name:: ").concat(this.empName, ", Salary:: ").concat(this.empSalary, " } "));
    };
    return Employees1;
}());
var Trainer1 = /** @class */ (function (_super) {
    __extends(Trainer1, _super);
    function Trainer1(subject, id, name, salary) {
        if (salary === void 0) { salary = 5000; }
        var _this = _super.call(this, id, name, salary) || this;
        _this.subject = subject;
        return _this;
    }
    Trainer1.prototype.CalculateSalary = function (hours) {
        var salary;
        salary = this.empSalary * hours + (this.empSalary * hours) * 2.5 / 100;
        console.log("Salary of Trainer:: " + salary);
    };
    Trainer1.prototype.DisplayTrainerDetails = function () {
        _super.prototype.Display.call(this);
        console.log("Subject:: ".concat(this.subject));
    };
    return Trainer1;
}(Employees1));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.CalculateSalary = function (hours) {
        var salary;
        salary = this.empSalary * hours + (this.empSalary * hours) * 1.5 / 100;
        console.log("Salary of Admin:: " + salary);
    };
    return Admin;
}(Employees1));
var faculty = new Trainer1("Angular", 101, "Bhuwan", 16000);
faculty.CalculateSalary(4);
faculty.DisplayTrainerDetails();
var admin = new Admin(102, "Ram");
admin.CalculateSalary(4);
admin.Display();
