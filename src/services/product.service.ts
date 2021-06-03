import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map, tap} from "rxjs/operators";
import {ResponseInterface} from "./ResponseInterface";


export function mapHttpData(response: ResponseInterface): ProductInterface[] {
  return ((response as Array<any>).map((item, index) => {
    item.id = index;
    return (item as ProductInterface);
  }));
}

export interface ProductInterface {
  price?: number;
  thumb_link?: string;
  large_link?: string;
  name?: string;
  id?: number;
  description?: string;
}

let productListResponse: ProductInterface[] | null = null;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }

  private updateProductListCache = (response: ResponseInterface) => {
    if (!productListResponse) {
      productListResponse = (response as Array<any>).map((item, index) => {
        item.id = index;
        return (item as ProductInterface);
      });
    }
  };

  getProducts(force = false): Observable<ProductInterface[] | undefined> {
    if (productListResponse && !force) {
      return of((productListResponse as ProductInterface[]));
    }
    // Clears cache for updating with new data
    productListResponse = null;
    return this.http.get('assets/database.json')
        .pipe(
            tap(this.updateProductListCache),
            map(mapHttpData)
        );
  }

  getProduct(id: number, force = false) {
    if (productListResponse && Array.isArray(productListResponse) && productListResponse.length > 0) {
      const target = productListResponse[id];
      if (target) {
        return of(JSON.parse(JSON.stringify(target)));
      }
    }
    return of(null);
  }
}
