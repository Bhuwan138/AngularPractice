import { Component } from '@angular/core';
import { ProductInfo } from './ProductInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cartItemCount:number = 0;
  public categories:string[] = [];
  public products:ProductInfo[] = [];
  public cartItems:ProductInfo[] = [];
  public isCartItemsVisible:boolean = false;
  public totalPriceOfCart:number = 0;

  public async LoadCategories(){
    let response = await fetch("https://fakestoreapi.com/products/categories");
    let data = await response.json();
    data.unshift("all");
    this.categories = data;
  }

  public async LoadProducts(url:string){
    let response = await fetch(url);
    let data = await response.json();
    this.products =  data;
    
  }

  public GetCartItemsCount():void{    
    this.cartItemCount = this.cartItems.length;
  } 

  ngOnInit():void{
    this.LoadCategories();
    this.LoadProducts('https://fakestoreapi.com/products');
    this.GetCartItemsCount();
  }

  CategoryChange(category:string){
    console.log("category change:: ")
    if(category == "all"){
      this.LoadProducts("https://fakestoreapi.com/products");
    }else{
      console.log(category)
      this.LoadProducts(`https://fakestoreapi.com/products/category/${category}`);
    }
  }

  ToogleCart(){
    this.isCartItemsVisible = this.isCartItemsVisible==false?true:false;
  }

  RemoveItem(index:number){
    let confirmation = confirm("Are you sure to delete?");
    if(confirmation){
      this.cartItems.splice(index,1); 
      this.GetCartItemsCount();
    }
    this.GetTotalPriceOfCart();
  }

  async AddToCart(id:number){
      let response = await fetch(`https://fakestoreapi.com/products/`+id);
      let data = await response.json();
      this.cartItems.push(data);
      this.GetTotalPriceOfCart();
      this.GetCartItemsCount();
  }

  public GetTotalPriceOfCart(){
    this.totalPriceOfCart = 0;
    this.cartItems.forEach(item => {
      this.totalPriceOfCart += item.price;
    });
  }

  
}
