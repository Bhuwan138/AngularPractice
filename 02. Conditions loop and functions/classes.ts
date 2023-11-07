class Student{
    stId:number = 101;
    stName:string = "Bhuwan";
    isActive:boolean = true;
    total:number = 0;

    arrMarks:Array<number> = [56,76,87];
    arrSubjects:string[] = ["TypeScript","JavaScript","Angular","React"];

    DisplayStudentDetails(){
        let student = `ID: ${this.stId}\nName: ${this.stName}\nIsActive: ${this.isActive}\n`;
        console.log(student);
    }

    DisplayEnrolledSubjects(){
        console.log("\nEnrolled Subjects: \n");
        for(let subject of this.arrSubjects){
            console.log("- " +subject );
        }
    }

    DisplayResult(){
        for(let mark of this.arrMarks){
            this.total += mark;
        }
        console.log(`Student Marks{ Total: ${this.total}, Average: ${this.total/this.arrMarks.length}}\n`)
    }
}

let st1:Student = new Student();
st1.DisplayStudentDetails();
st1.DisplayEnrolledSubjects();
st1.DisplayResult();