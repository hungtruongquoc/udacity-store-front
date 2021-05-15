import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ResponseInterface} from "./ResponseInterface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<any> {
    return this.http.get(environment.apiBase + '/products').pipe(map((response: ResponseInterface) => {
      if (response && 'success' === response.status) {
        return response.data;
      }
      return null;
    }));
  }
}
