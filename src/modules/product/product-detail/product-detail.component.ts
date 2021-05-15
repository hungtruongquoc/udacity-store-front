import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductInterface} from "../../../services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  detail: ProductInterface | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.detail = this.route.snapshot.data['detail'];
  }

}
