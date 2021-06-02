import {Component, OnInit} from '@angular/core';
import {CartItemInterface, ShoppingCartService} from "../../services/shopping-cart.service";
import {ProductInterface, ProductService} from "../../services/product.service";
import {OrderDataInterface} from "../../services/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartSrv: ShoppingCartService, private productSrv: ProductService, private router: Router) {
  }

  isLoading = false;
  cartItems: CartItemInterface[] = [];
  products: ProductInterface[] = [];

  private onProductLoaded = (products: ProductInterface[] | undefined): void => {
    if (products) {
      this.products = JSON.parse(JSON.stringify(products));
      this.addInformationToItems();
      this.isLoading = false;
    }
  };

  private addInformationToItems(): void {
    this.cartItems = this.cartItems.map(cartItem => {
      const product = this.products.find(item => cartItem.itemId === item.id);
      if (product) {
        cartItem.name = product.name;
        cartItem.imageLink = product.thumb_link;
        cartItem.price = product.price;
      }
      return {...cartItem};
    });
  }

  private onCartChanged = (newCart: CartItemInterface[]) => {
    this.cartItems = JSON.parse(JSON.stringify(newCart));
    this.addInformationToItems();
  };

  ngOnInit(): void {
    this.cartItems = JSON.parse(JSON.stringify(this.cartDetail));
    if (this.cartItems.length > 0) {
      this.isLoading = true;
      this.productSrv.getProducts().subscribe(this.onProductLoaded)
    }
    this.cartSrv.cartChanged.subscribe(this.onCartChanged)
  }

  public get cartDetail(): CartItemInterface[] {
    const list = this.cartSrv.getCartContent();
    if (Array.isArray(list)) {
      return list;
    }
    return [];
  }

  public removeCartItem(item: CartItemInterface) {
    this.cartSrv.removeItem(item);
  }

  public get cartTotal(): number {
    return this.cartItems.reduce((total: number, item: CartItemInterface) => {
      if (item && item.qty && item.price) {
        total += item.qty * item.price;
      }
      return total;
    }, 0)
  }

  sendOrderData(orderData: OrderDataInterface) {
    orderData.total = this.cartTotal;
    this.router.navigate(['/orders'], {state: orderData}).then(() => {
      this.cartSrv.removeCurrentCart();
    });
  }
}
