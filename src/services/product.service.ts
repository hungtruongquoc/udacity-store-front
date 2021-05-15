import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {ResponseInterface} from "./ResponseInterface";


export function mapHttpData(cache: ResponseInterface | null = null) {
  return (response: ResponseInterface) => {
    if (response && 'success' === response.status) {
      if (cache) {
        cache = JSON.parse(JSON.stringify(response));
      }
      return response.data;
    }
    return null;
  }
}

export interface ProductInterface {
  price?: number;
  thumb_link?: string;
  large_link?: string;
  name?: string;
  id?: number
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
    return this.http.get(environment.apiBase + '/products').pipe(map(mapHttpData(productListResponse)));
  }

  getProduct(id: number, force = false) {
    if (productListResponse && productListResponse.data && !force) {
      const {data} = productListResponse;
      if (data && Array.isArray(data) && data.length > 0) {
        const target = data.find(item => item.id === id);
        if (target) {
          return of({status: 'success', data: JSON.parse(JSON.stringify(target))});
        }
      }
      return of({status: 'success', data: null});
    }
    return this.http.get(environment.apiBase + `/products/${id}`).pipe(map(mapHttpData()));
  }
}
