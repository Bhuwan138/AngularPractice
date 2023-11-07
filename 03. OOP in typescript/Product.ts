class Category{
    categoryId:number;
    categoryName:string;
    product:Product;

    constructor(cartId:number,cartName:string){
        this.categoryId = cartId;
        this.categoryName = cartName;
    }

    Display(){
        console.log(`CategoryId:: ${this.categoryId}`)
        console.log(`CategoryName:: ${this.categoryName}`)
    }
}
abstract class Product extends Category{
    productId:number;
    productName:string;

    constructor(productId:number,productName:string,cartId:number,cartName:string){
        super(cartId,cartName);
        this.productId = productId;
        this.productName = productName;
    }

    Display() {
        super.Display();
        console.log(`ProductId:: ${this.productId}`);
        console.log(`ProductName:: ${this.productName}`);
    }

    abstract CallPrice(qty:number);
}
class Mobile extends Product{
    CallPrice(qty: number) {
        let total:number;
        total = qty*8000;
        console.log(`Cart Value :: ${total}`);
    }
}

let oppo:Mobile = new Mobile(101,"Oppo",1,"Electronics");
oppo.CallPrice(2);
oppo.Display();