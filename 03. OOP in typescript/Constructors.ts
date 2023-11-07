class Employee{
    empId:number;
    empName:string;
    empSalary:number;
    empAccount?:number;

    // default constructor 
    // constructor(){
    //     this.empId = 101;
    //     this.empName = "Bhuwan";
    //     this.empSalary = 80000;
    // }

    // paramerized constructor 
    constructor(id:number,name:string,salary = 5000,acc?:number){
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
        this.empAccount = acc;
    }

    Display(){
        console.log(`Employee { ID:: ${this.empId}, Name:: ${this.empName}, Salary:: ${this.empSalary}, Account No:: ${this.empAccount} }\n`)
    }

}

let emp1:Employee = new Employee(101,"Bhuwan",90000,789532316831);
let emp2:Employee = new Employee(102,"Ram",25000);
let emp3:Employee = new Employee(102,"Ram");
emp1.Display();
emp2.Display();
emp3.Display();