import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemAdditionComponent } from './cart-item-addition.component';

describe('CartItemAdditionComponent', () => {
  let component: CartItemAdditionComponent;
  let fixture: ComponentFixture<CartItemAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
