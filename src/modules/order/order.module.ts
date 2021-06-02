import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderConfirmationComponent} from "./order-confirmation/order-confirmation.component";
import {OrderRoutingModule} from "./order-routing.module";
import {PageHeaderModule} from "../../common/components/page-header/page-header.module";


@NgModule({
  declarations: [
    OrderConfirmationComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    PageHeaderModule
  ]
})
export class OrderModule {
}
