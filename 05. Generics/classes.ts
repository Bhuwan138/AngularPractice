class Student<T,U>{
    private Id:T;
    private Name:U;

    constructor(Id:T,Name:U){
        this.Id = Id;
        this.Name = Name;
    }

    Display(){
        console.log(`ID:: ${this.Id}, Name:: ${this.Name}`);
    }
}

let s1:Student<number,string>  = new Student(101,"Bhuwan");
s1.Display();

let s2:Student<string,string>  = new Student("Std101","Bhuwan");
s2.Display();

