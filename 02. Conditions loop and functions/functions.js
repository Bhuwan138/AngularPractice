var Result;
(function (Result) {
    Result[Result["Pass"] = 1] = "Pass";
    Result[Result["Fail"] = -1] = "Fail";
    Result[Result["Promoted"] = 0] = "Promoted";
})(Result || (Result = {}));
function Student() {
    var studentId = 101;
    var name = "Bhuwan";
    var isActive = true;
    var arrMarks = [43, 65, 87];
    var total = 0;
    for (var _i = 0, arrMarks_1 = arrMarks; _i < arrMarks_1.length; _i++) {
        var mark = arrMarks_1[_i];
        total += mark;
    }
    var average = total / arrMarks.length;
    var courses = ["Java", "Angular", "C Programming", "React", "Hibernate"];
    for (var _a = 0, courses_1 = courses; _a < courses_1.length; _a++) {
        var cource = courses_1[_a];
        console.log(cource);
    }
    // tupple 
    var dob = [26, "December", 2000];
    // enum 
    var stdResult;
    this.stdResult = function () {
        if (average >= 35) {
            return Result.Pass;
        }
        else {
            return Result.Fail;
        }
    };
}
var std = new Student();
console.log(std.stdResult());
console.log(Result[std.stdResult()]);
