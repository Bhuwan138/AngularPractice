import { Component } from "@angular/core";

@Component({
    selector: "app-product1",
    template: `
        <h1> Welcome to Angular Component </h1>
        <hr />
        <dl>
            Product ID: {{productId}} <br />
            Product Name: {{productName}} <br />
            Product Price: {{productPrice}} <br />
            Product Quantity: {{productQuantity}} <br />
        </dl>
    `,
    styles: [`
        h1{
            color:red;
            text-align:center
        }
    `]
})

export class ProductComponent1{
    productId:number = 101;
    productName:string = "Samsung Mobile";
    productPrice:number = 25000;
    productQuantity:number = 4;
}