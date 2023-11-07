abstract class Employees1{
    empId:number;
    empName:string;
    empSalary:number;
    
    constructor(id:number,name:string,salary = 5000){
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
    }

    Display(){
        console.log(`Employee { ID:: ${this.empId}, Name:: ${this.empName}, Salary:: ${this.empSalary} } `)
    }

    abstract CalculateSalary(hours:number);

}

class Trainer1 extends Employees1{
    subject:string;
    constructor(subject:string,id:number,name:string,salary = 5000){
        super(id,name,salary);
        this.subject = subject;
    }

    CalculateSalary(hours: number) {
        let salary:number;
        salary = this.empSalary*hours + (this.empSalary*hours)*2.5/100;
        console.log("Salary of Trainer:: " + salary);
    }

    DisplayTrainerDetails(){
        super.Display();
        console.log(`Subject:: ${this.subject}`);
    }
}

class Admin extends Employees1{
    CalculateSalary(hours: number) {
        let salary:number;
        salary = this.empSalary*hours + (this.empSalary*hours)*1.5/100;
        console.log("Salary of Admin:: " + salary);
    }
}

let faculty:Trainer1 = new Trainer1("Angular",101,"Bhuwan",16000);
faculty.CalculateSalary(4);
faculty.DisplayTrainerDetails();


let admin:Admin  = new Admin(102,"Ram");
admin.CalculateSalary(4);
admin.Display();
