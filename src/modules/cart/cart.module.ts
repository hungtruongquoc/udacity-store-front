import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartRoutingModule} from './cart-routing.module';
import {CartComponent} from './cart.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CartItemInputComponent} from "./cart-item-input/cart-item-input.component";
import {MatButtonModule} from "@angular/material/button";
import {CartItemAdditionModule} from "../../common/components/cart-item-addition/cart-item-addition.module";


@NgModule({
    declarations: [
        CartComponent,
        CartItemInputComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        CartItemAdditionModule
    ]
})
export class CartModule {
}
