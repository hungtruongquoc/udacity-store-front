import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable, of} from "rxjs";
import {map, tap} from "rxjs/operators";
import {ResponseInterface} from "./ResponseInterface";


export function mapHttpData(response: ResponseInterface) {
    if (response && 'success' === response.status) {
        return response.data;
    }
    return null;
}

export interface ProductInterface {
    price?: number;
    thumb_link?: string;
    large_link?: string;
    name?: string;
    id?: number
}

let productListResponse: ResponseInterface | null = null;

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {

    }

    private updateProductListCache = (response: ResponseInterface) => {
        if (!productListResponse) {
            productListResponse = JSON.parse(JSON.stringify(response));
        }
    };

    getProducts(force = false): Observable<ProductInterface[] | undefined> {
        if (productListResponse && !force) {
            return of(productListResponse.data);
        }
        // Clears cache for updating with new data
        productListResponse = null;
        return this.http.get(environment.apiBase + '/products')
            .pipe(
                tap(this.updateProductListCache),
                map(mapHttpData)
            );
    }

    getProduct(id: number, force = false) {
        if (productListResponse && productListResponse.data && !force) {
            const {data} = productListResponse;
            if (data && Array.isArray(data) && data.length > 0) {
                const target = data.find(item => parseInt(item.id, 10) === id);
                if (target) {
                    return of(JSON.parse(JSON.stringify(target)));
                }
            }
            return of(null);
        }
        return this.http.get(environment.apiBase + `/products/${id}`).pipe(map(mapHttpData));
    }
}
