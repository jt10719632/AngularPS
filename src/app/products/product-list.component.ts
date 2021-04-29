import { Component, OnInit } from "@angular/core";
import { IProducts } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    // We can implement style sheets via styleUrls.
    // This will only affect the component it is implemented in and won't leak out
    styleUrls: ['./product-list.component.css']
})

// implements OnInit must be used in the class otherwise you will get an error.
export class ProductListComponent implements OnInit {
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
    products: IProducts[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 22.11,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 3,
            "productName": "Hammer",
            "productCode": "TBX-42069",
            "releaseDate": "March 21, 2021",
            "description": "Steel Hammer",
            "price": 69.11,
            "starRating": 2.6,
            "imageUrl": "assets/images/hammer.png"
        }
    ];

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

    ngOnInit(): void {
        console.log('In OnInit');
        this.listFilter = 'cart';
    }
};