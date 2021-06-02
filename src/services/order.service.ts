import { Injectable } from '@angular/core';

export interface OrderDataInterface {
  fullName?: string;
  address?: string;
  cardNumber?: string;
  items?: Array<{productId?: string; qty?: string}>
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
}
