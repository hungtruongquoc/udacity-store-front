import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {OrderDataInterface} from "../../../services/order.service";

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {

  state$: Observable<any>;

  order: OrderDataInterface | null = null;

  constructor(public activatedRoute: ActivatedRoute) {
    this.state$ = this.activatedRoute.paramMap
        .pipe(map(() => window.history.state))
  }

  ngOnInit(): void {
    this.state$.subscribe(data => {
      this.order = JSON.parse(JSON.stringify(data));
    })
  }

}
