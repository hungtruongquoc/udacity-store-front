import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {CheckOutFormComponent} from "./check-out-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [
        CheckOutFormComponent
    ],
    exports: [CheckOutFormComponent]
})
// @ts-ignore
export class CheckOutFormModule {}
