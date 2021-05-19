import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../../services/shopping-cart.service";
import {ProductInterface} from "../../../services/product.service";

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
    private quantity = 0;

    constructor(private cartSrv: ShoppingCartService) {
    }

    @Input()
    item: ProductInterface | undefined;

    ngOnInit(): void {
    }

    updateItemQty(value: number): void {
        this.quantity = value;
    }

    addToCart(item: ProductInterface | undefined) {
        if (item) {
            this.cartSrv.addToCart({itemId: item.id, qty: this.quantity});
        }
    }
}
