var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Category = /** @class */ (function () {
    function Category(cartId, cartName) {
        this.categoryId = cartId;
        this.categoryName = cartName;
    }
    Category.prototype.Display = function () {
        console.log("CategoryId:: ".concat(this.categoryId));
        console.log("CategoryName:: ".concat(this.categoryName));
    };
    return Category;
}());
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(productId, productName, cartId, cartName) {
        var _this = _super.call(this, cartId, cartName) || this;
        _this.productId = productId;
        _this.productName = productName;
        return _this;
    }
    Product.prototype.Display = function () {
        _super.prototype.Display.call(this);
        console.log("ProductId:: ".concat(this.productId));
        console.log("ProductName:: ".concat(this.productName));
    };
    return Product;
}(Category));
var Mobile = /** @class */ (function (_super) {
    __extends(Mobile, _super);
    function Mobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mobile.prototype.CallPrice = function (qty) {
        var total;
        total = qty * 8000;
        console.log("Cart Value :: ".concat(total));
    };
    return Mobile;
}(Product));
var oppo = new Mobile(101, "Oppo", 1, "Electronics");
oppo.CallPrice(2);
oppo.Display();
