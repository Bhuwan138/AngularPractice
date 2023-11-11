import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  productId:number = 101;
  productName:string = "IPhone";
  productAvaibality:boolean = true
  
  ChangeValue(){
    this.productId = 102;
    this.productName = "Samsung";
    this.productAvaibality = false
  }
}
