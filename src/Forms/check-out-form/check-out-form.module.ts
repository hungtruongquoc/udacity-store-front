import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {CheckOutFormComponent} from "./check-out-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [
    CheckOutFormComponent
  ],
  exports: [CheckOutFormComponent]
})
// @ts-ignore
export class CheckOutFormModule {
}
