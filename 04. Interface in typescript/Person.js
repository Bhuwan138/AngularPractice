var Person = /** @class */ (function () {
    function Person(first, second, age) {
        this.firstName = first;
        this.secondName = second;
        this.age = age;
    }
    Person.prototype.FullName = function () {
        return this.firstName + " " + this.secondName;
    };
    Person.prototype.GetAge = function () {
        return this.age;
    };
    return Person;
}());
var p1 = new Person("Bhuwan", "Pandey", 22);
console.log("Full Name:: " + p1.FullName());
console.log("Get Age:: " + p1.GetAge());
