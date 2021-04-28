import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: any[] = [
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

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
};