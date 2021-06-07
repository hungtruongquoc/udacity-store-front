import {Component, Input, OnInit} from '@angular/core';
import {CartItemInterface, ShoppingCartService} from "../../../services/shopping-cart.service";
import {ProductInterface} from "../../../services/product.service";
import {AppStateService} from "../../../services/app-state.service";
import {skip} from "rxjs/operators";

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
    private quantity: number | null = 0;
    cartItem: CartItemInterface | undefined | null = null;

    constructor(private cartSrv: ShoppingCartService, private appSrv: AppStateService) {
    }

    @Input()
    item: ProductInterface | undefined;

    ngOnInit(): void {
        this.cartSrv.currentCount.pipe(skip(1)).subscribe(() => {
            this.appSrv.emitSnackbarEvent('Cart updated!', null);
        });
        const {item} = this;
        if (item) {
            this.cartItem = this.cartSrv.getCartItem(item.id);
            this.quantity = this.initialCartQty;
        }
    }

    updateItemQty(value: number | null): void {
        this.quantity = value;
    }

    addToCart(item: ProductInterface | undefined) {
        if (item) {
            this.cartSrv.addToCart({itemId: item.id, qty: this.quantity});
        }
    }

    get initialCartQty(): number | null {
        const {cartItem} = this;
        return cartItem  && cartItem.qty !== undefined ? cartItem.qty : 0;
    }
}
