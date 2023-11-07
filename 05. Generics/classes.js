var Student = /** @class */ (function () {
    function Student(Id, Name) {
        this.Id = Id;
        this.Name = Name;
    }
    Student.prototype.Display = function () {
        console.log("ID:: ".concat(this.Id, ", Name:: ").concat(this.Name));
    };
    return Student;
}());
var s1 = new Student(101, "Bhuwan");
s1.Display();
var s2 = new Student("Std101", "Bhuwan");
s2.Display();
