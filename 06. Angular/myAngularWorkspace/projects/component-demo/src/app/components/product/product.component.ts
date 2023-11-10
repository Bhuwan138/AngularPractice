import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  // Model 
  public product = {
    productId:10,
    productName:"Netflix",
    isAvailable:true,
    imageUrl:"assets/netflix.jpg"
  }
}
