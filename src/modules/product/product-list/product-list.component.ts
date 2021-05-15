import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {AppStateService} from "../../../services/app-state.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private service: ProductService, private appStateSrv: AppStateService) { }

  itemList: any[] | null = null;

  private onDataLoaded = (data: any) => {
    this.itemList = data ? [...data] : null;
    this.appStateSrv.toggleLoading();
  };

  ngOnInit(): void {
    this.appStateSrv.toggleLoading();
    this.service.getProducts().subscribe(this.onDataLoaded)
  }

  get hasItems() {
    const {itemList} = this;
    return itemList && Array.isArray(itemList) && itemList.length > 0;
  }

  get count(): number | null {
    return this.itemList && this.hasItems ? this.itemList.length : null;
  }
}
