import {Injectable, Output, EventEmitter} from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface CartItemInterface {
  itemId?: number;
  qty?: number;
  name?: string;
  imageLink?: string;
  price?: number
}

const shoppingCart: CartItemInterface[] = [];

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
    this.cartChanged.emit(shoppingCart);
  }

  addToCart(item: CartItemInterface) {
    if (item) {
      const existingIndex = shoppingCart.findIndex(cartItem => cartItem.itemId === item.itemId);
      if (existingIndex > -1) {
        if (item.qty !== undefined && item.qty !== null && item.qty > 0) {
          shoppingCart[existingIndex] = {...item};
        }
        else {
          shoppingCart.splice(existingIndex, 1);
        }
      }
      else {
        shoppingCart.push(item);
      }
      this.emitChangeInfo();
    }
  }

  removeItem(item: CartItemInterface) {
    const existingIndex = shoppingCart.findIndex(cartItem => cartItem.itemId === item.itemId);
    if (existingIndex > -1) {
      shoppingCart.splice(existingIndex, 1);
      this.emitChangeInfo();
    }
  }
}
