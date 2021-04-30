import { Injectable } from "@angular/core";
import { IProducts } from "./product";

@Injectable({
    // enables root injection for this services
    // Service is available throughout the application
    // Recommended for most scenarios
    // To register in a component add 'providers: [ProductService]' to the component
    providedIn: 'root'
})

export class ProductService {

    getProducts(): IProducts[] {
        return [
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
        ]
    };
};