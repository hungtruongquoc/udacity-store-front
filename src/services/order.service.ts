import { Injectable } from '@angular/core';

export interface OrderDataInterface {
  fullName?: string;
  address?: string;
  cardNumber?: string;
  total?: number
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
}
