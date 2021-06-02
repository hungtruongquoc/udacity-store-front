import {Injectable, Output, EventEmitter} from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface CartItemInterface {
  itemId?: number;
  qty?: number;
  name?: string;
  imageLink?: string;
  price?: number
}

let shoppingCart: CartItemInterface[] = [];

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  @Output() cartChanged: EventEmitter<CartItemInterface[]> = new EventEmitter<CartItemInterface[]>();

  @Output()
  currentCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  getCartContent(): CartItemInterface[] {
    return shoppingCart;
  }

  private emitChangeInfo() {
    this.currentCount.next(shoppingCart.length);
    this.cartChanged.emit(JSON.parse(JSON.stringify(this.getCartContent())));
  }

  addToCart(item: CartItemInterface) {
    if (item) {
      const existingIndex = shoppingCart.findIndex(cartItem => cartItem.itemId === item.itemId);
      if (existingIndex > -1) {
        if (item.qty !== undefined && item.qty !== null && item.qty > 0) {
          if (shoppingCart[existingIndex].qty !== item.qty) {
            shoppingCart[existingIndex] = {...item};
            this.emitChangeInfo();
          }
        }
        else {
          shoppingCart.splice(existingIndex, 1);
          this.emitChangeInfo();
        }
      }
      else {
        if (item.qty !== undefined && item.qty !== null && item.qty > 0) {
          shoppingCart.push(item);
          this.emitChangeInfo();
        }
      }
    }
  }

  removeItem(item: CartItemInterface) {
    const existingIndex = shoppingCart.findIndex(cartItem => cartItem.itemId === item.itemId);
    if (existingIndex > -1) {
      shoppingCart.splice(existingIndex, 1);
      this.emitChangeInfo();
    }
  }

  public getCartItem(productId: number | undefined | null = null): CartItemInterface | undefined | null {
    if (productId) {
      return shoppingCart.find(item => item.itemId === productId);
    }
    return null;
  }

  public removeCurrentCart() {
    shoppingCart = [];
    this.emitChangeInfo();
  }
}
