import { Component } from "@angular/core";

@Component({
    selector:'app-employee',
    template:`
        <h1> Welcome to Angular Component </h1>
        <hr />
        <dl>
            <dt> Employee ID: </dt>
            <dd> {{empId}} </dd>
            <dt> Employee Name: </dt>
            <dd> {{empName}} </dd>
            <dt> Employee Salary: </dt>
            <dd> {{empSalary}} </dd>
        </dl>
    `,
    styles:[`
        h1{
            color:green;
            text-align:center
        }
    `]
})

export class EmployeeComponent{
    empId:number = 101;
    empName:string = "Bhuwan";
    empSalary:number = 45000;
}
