import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cart-item-addition',
  templateUrl: './cart-item-addition.component.html',
  styleUrls: ['./cart-item-addition.component.scss']
})
export class CartItemAdditionComponent implements OnInit {

  @Input()
  showButton = true;

  @Input()
  initialQty = 0;

  @Output()
  quantityChanged: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  addCartButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
}
