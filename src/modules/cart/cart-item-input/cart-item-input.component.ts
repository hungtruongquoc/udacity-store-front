import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItemInterface} from "../../../services/shopping-cart.service";

@Component({
  selector: 'app-cart-item-input',
  templateUrl: './cart-item-input.component.html',
  styleUrls: ['./cart-item-input.component.scss']
})
export class CartItemInputComponent implements OnInit {

  @Output()
  removeClicked: EventEmitter<CartItemInterface> = new EventEmitter<CartItemInterface>();

  @Input()
  item: CartItemInterface | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
