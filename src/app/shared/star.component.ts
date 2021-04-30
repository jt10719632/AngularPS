import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";


@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    // @Input allows for this rating property to be used as a property binding
    // [rating] would be the property binding
    @Input() rating: number = 0;
    cropWidth: number = 100;
    // @Output allows for this ratingClicked property to send information to the outer component.
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    };

    onClick(): void {
        // console.log(`The rating ${this.rating} was clicked!`);
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    };
};