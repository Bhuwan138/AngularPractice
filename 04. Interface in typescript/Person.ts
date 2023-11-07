interface IPerson{
    firstName:string;
    secondName:string;
    age:number;
    FullName():string;
    GetAge():number;
}

class Person implements IPerson{
    firstName: string;
    secondName: string;
    age: number;

    constructor(first:string,second:string,age:number){
        this.firstName = first;
        this.secondName = second;
        this.age = age;
    }

    FullName(): string {
        return this.firstName + " " + this.secondName;
    }
    GetAge(): number {
        return this.age;
    }
}

let p1:Person = new Person("Bhuwan","Pandey",22);
console.log("Full Name:: " + p1.FullName());
console.log("Get Age:: " + p1.GetAge());