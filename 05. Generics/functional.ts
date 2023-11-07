function DisplayData<T>(id:T,name:string){
    console.log(`ID:: ${id}, Name:: ${name}`);
    console.log(`ID Type=>:: ${typeof(id)}, Name Type=>:: ${typeof(name)}`);
}

DisplayData<number>(1,"Bhuwan");
DisplayData<string>("S101","Shyam");