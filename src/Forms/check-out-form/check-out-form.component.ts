import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderDataInterface} from "../../services/order.service";

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.scss']
})
export class CheckOutFormComponent implements OnInit {

  form: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(5)]],
    address: ['', [Validators.required, Validators.minLength(10)]],
    cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(16),
      Validators.maxLength(16)]],
  });

  @Output()
  formSubmitted: EventEmitter<OrderDataInterface> = new EventEmitter<OrderDataInterface>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  public get hasValue(): boolean {
    return this.form.dirty;
  }

  emitFormSubmission(event: Event) {
    this.formSubmitted.emit(this.form.value);
  }

  hasControlError(controlName: string): boolean {
    const {form} = this;
    const control = form.get(controlName);
    if (control) {
      return control.invalid;
    }
    return false;
  }

  hasValidationError(controlName: string, validatorName: string): boolean {
    const {form} = this;
    const control = form.get(controlName);
    if (control) {
      return control.hasError(validatorName);
    }
    return false;
  }
}
