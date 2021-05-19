import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemInputComponent } from './cart-item-input.component';

describe('CartItemInputComponent', () => {
  let component: CartItemInputComponent;
  let fixture: ComponentFixture<CartItemInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
