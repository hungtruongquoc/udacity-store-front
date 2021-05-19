import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductListComponent} from "./product-list/product-list.component";
import {IndexComponent} from "./index/index.component";
import {ProductListItemComponent} from "./product-list-item/product-list-item.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductDetailResolverService} from "../../services/product-detail-resolver.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {CartItemAdditionModule} from "../../common/components/cart-item-addition/cart-item-addition.module";
import {PageHeaderModule} from "../../common/components/page-header/page-header.module";


@NgModule({
    declarations: [
        ProductListComponent,
        IndexComponent,
        ProductListItemComponent,
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatChipsModule,
        MatFormFieldModule,
        MatSelectModule,
        CartItemAdditionModule,
        PageHeaderModule
    ],
    providers: [
        ProductDetailResolverService
    ]
})
export class ProductModule {
}
