import {NgModule} from "@angular/core";
import {CartItemAdditionComponent} from "./cart-item-addition.component";
import {CommonModule} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        CartItemAdditionComponent
    ],
    imports: [
        CommonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatButtonModule,
        FormsModule,
    ],
    exports: [
        CartItemAdditionComponent
    ]
})
export class CartItemAdditionModule {}
