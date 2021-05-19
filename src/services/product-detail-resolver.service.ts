import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ProductInterface, ProductService} from "./product.service";
import {Observable, of} from "rxjs";

@Injectable()
export class ProductDetailResolverService implements Resolve<ProductInterface>{

  constructor(private service: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInterface> {
    const productId = route.params['id'];
    return this.service.getProduct(parseInt(productId, 10));
  }
}
