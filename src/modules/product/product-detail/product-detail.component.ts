import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductInterface} from "../../../services/product.service";
import {ShoppingCartService} from "../../../services/shopping-cart.service";
import {AppStateService} from "../../../services/app-state.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  detail: ProductInterface | null = null;
  quantity: number = 0;

  constructor(private route: ActivatedRoute, private cartSrv: ShoppingCartService, private appSrv: AppStateService) {
  }

  ngOnInit(): void {
    debugger;
    this.detail = this.route.snapshot.data['detail'];
  }

  addCart(): void {
    const {detail, quantity} = this;
    if (detail) {
      this.cartSrv.addToCart({itemId: detail.id, qty: quantity});
      this.appSrv.emitSnackbarEvent('Cart updated', {itemId: detail.id, qty: quantity});
    }
  }
}
