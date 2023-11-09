import { Component } from "@angular/core";

@Component({
    selector:"app-student",
    template:`
        <h1> Welcome to Angular Component </h1>
        <hr />
        <dl>
            <dt> Student ID: </dt>
            <dd> {{stdId}} </dd>
            <dt> Student Name: </dt>
            <dd> {{stdName}} </dd>
            <dt> Student Percentage:  </dt>
            <dd> {{stdPercentage}} </dd>
        </dl>
    `,
    styles:[`
        h1{
            color:red;
            text-size:45px;
            text-align: center;
        }
    `]
})

export class StudentComponent{
    stdId:number = 101;
    stdName:string = "Bhuwan";
    stdPercentage:number = 97.56;
}