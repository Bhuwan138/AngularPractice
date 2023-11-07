var Student = /** @class */ (function () {
    function Student() {
        this.stId = 101;
        this.stName = "Bhuwan";
        this.isActive = true;
        this.total = 0;
        this.arrMarks = [56, 76, 87];
        this.arrSubjects = ["TypeScript", "JavaScript", "Angular", "React"];
    }
    Student.prototype.DisplayStudentDetails = function () {
        var student = "ID: ".concat(this.stId, "\nName: ").concat(this.stName, "\nIsActive: ").concat(this.isActive, "\n");
        console.log(student);
    };
    Student.prototype.DisplayEnrolledSubjects = function () {
        console.log("\nEnrolled Subjects: \n");
        for (var _i = 0, _a = this.arrSubjects; _i < _a.length; _i++) {
            var subject = _a[_i];
            console.log("- " + subject);
        }
    };
    Student.prototype.DisplayResult = function () {
        for (var _i = 0, _a = this.arrMarks; _i < _a.length; _i++) {
            var mark = _a[_i];
            this.total += mark;
        }
        console.log("Student Marks{ Total: ".concat(this.total, ", Average: ").concat(this.total / this.arrMarks.length, "}\n"));
    };
    return Student;
}());
var st1 = new Student();
st1.DisplayStudentDetails();
st1.DisplayEnrolledSubjects();
st1.DisplayResult();
