import {Component, OnInit} from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {ShoppingCartService} from "../services/shopping-cart.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'store';

  cartCount$: Observable<number> = of(0);

  get isLoading() {
    return this.stateSrv.isLoading;
  }

  constructor(private stateSrv: AppStateService, private router: Router, private cartSrv: ShoppingCartService) {
    this.cartCount$ = cartSrv.currentCount;
    cartSrv.currentCount.subscribe(console.log)
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.stateSrv.toggleLoading();
      }
      if (event instanceof  NavigationEnd) {
        this.stateSrv.toggleLoading();
      }
    })
  }
}
