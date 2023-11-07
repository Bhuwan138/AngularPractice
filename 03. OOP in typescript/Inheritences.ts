class Employees{
    empId:number;
    empName:string;
    empSalary:number;
    
    constructor(id:number,name:string,salary = 5000){
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
    }

    protected Display(){
        console.log(`Employee { ID:: ${this.empId}, Name:: ${this.empName}, Salary:: ${this.empSalary}`)
    }

}

class Trainer extends Employees{
    subject:string;

    constructor(subject:string,id:number,name:string,salary = 5000){
        super(id,name,salary);
        this.subject = subject;
    }

    Display(): void {
        super.Display();
        console.log(`, Subject:: ${this.subject} }`);
    }

}

let trainer1:Trainer = new Trainer("Angular",101,"Bhuwan",50000);
trainer1.Display();
