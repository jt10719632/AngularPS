import { Component, OnInit } from "@angular/core";
import { IProducts } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    // We can implement style sheets via styleUrls.
    // This will only affect the component it is implemented in and won't leak out
    styleUrls: ['./product-list.component.css']
})

// implements OnInit must be used in the class otherwise you will get an error.
export class ProductListComponent implements OnInit {
    
    // (private productService: ProductService)
    // This is the shorthand of assigning a private property in the constructor
    // Here we are assigning the ProducService service to this Component
    constructor(private productService: ProductService) {

    };
    
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    };
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter:' , value);
        this.filteredProducts = this.performFilter(value);
        console.log(this.filteredProducts);
    };

    filteredProducts: IProducts[] = [];

    // Specified the interface we are going to use for the array.
    // This will allow for strongly typed coding.
    products: IProducts[] = [];

    // returns IProducts[] which will be used in the filteredProducts array
    performFilter(filterBy: string): IProducts[] {
        filterBy = filterBy.toLocaleLowerCase();
        // products array is using the filter method
        // Arrow functions can be multi lined with {} but you will need to have a return statement
        return this.products.filter((product: IProducts) =>  {
            // Checks if the product name contains the filter criteria
            console.log(product.productName.toLocaleLowerCase().includes(filterBy))
            // Returns True or False
            return product.productName.toLocaleLowerCase().includes(filterBy)});
    };

    toggleImage(): void {
        this.showImage = !this.showImage;
    };
    // OnInit is generally a good place to grab data or set data in
    // For example if you were to query a database and store the products in the array.
    // You would do that in here
    ngOnInit(): void {
        // Storing data from our service into components products array
        this.products = this.productService.getProducts();
        // Pushing products array into filterProducts
        // This is to display the products in the view as the view is pointing to the filteredProducts array.
        this.filteredProducts = this.products;
        console.log('In OnInit');
    };

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    };
};