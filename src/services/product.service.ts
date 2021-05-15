import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {ResponseInterface} from "./ResponseInterface";


export interface ProductInterface {
  price?: number;
  thumb_link?: string;
  large_link?: string;
  name?: string;
}

export interface ProductListResponse {
  status?: string;
  data?: ProductInterface[];
  message?: string
}

let productListResponse: ProductListResponse | null = null;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }

  getProducts(force = false): Observable<ProductInterface[] | undefined> {
    if (productListResponse && !force) {
      return of(productListResponse.data);
    }
    return this.http.get(environment.apiBase + '/products').pipe(map((response: ResponseInterface) => {
      if (response && 'success' === response.status) {
        productListResponse = response;
        return response.data;
      }
      return null;
    }));
  }
}
