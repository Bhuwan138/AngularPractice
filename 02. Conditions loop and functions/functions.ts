enum Result {
    Pass = 1,
    Fail = -1,
    Promoted = 0
}

function Student(){
    let studentId:number = 101;
    let name:string = "Bhuwan";
    let isActive:boolean = true;

    let arrMarks:Array<number> = [43,65,87];
    let total = 0;
    for(let mark of arrMarks){
        total += mark;
    }

    let average = total/arrMarks.length;

    let courses:string[] = ["Java","Angular","C Programming","React","Hibernate"];
    for(let cource of courses){
        console.log(cource)
    }


    // tupple 
    let dob:[number,string,number] = [26,"December",2000 ];

    // enum 
    let stdResult:Result;
    this.stdResult = () =>{
        if(average >= 35){
            return Result.Pass;
        }else{
            return Result.Fail;
        }
    } 

}

let std = new Student();
console.log(std.stdResult());
console.log(Result[std.stdResult()]);