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
var Employees = /** @class */ (function () {
    function Employees(id, name, salary) {
        if (salary === void 0) { salary = 5000; }
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
    }
    Employees.prototype.Display = function () {
        console.log("Employee { ID:: ".concat(this.empId, ", Name:: ").concat(this.empName, ", Salary:: ").concat(this.empSalary));
    };
    return Employees;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(subject, id, name, salary) {
        if (salary === void 0) { salary = 5000; }
        var _this = _super.call(this, id, name, salary) || this;
        _this.subject = subject;
        return _this;
    }
    Trainer.prototype.Display = function () {
        _super.prototype.Display.call(this);
        console.log(", Subject:: ".concat(this.subject, " }"));
    };
    return Trainer;
}(Employees));
var trainer1 = new Trainer("Angular", 101, "Bhuwan", 50000);
trainer1.Display();
