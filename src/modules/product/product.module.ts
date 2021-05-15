import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductListComponent} from "./product-list/product-list.component";
import {IndexComponent} from "./index/index.component";
import {ProductListItemComponent} from "./product-list-item/product-list-item.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ProductListComponent,
    IndexComponent,
    ProductListItemComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
})
export class ProductModule {
}
