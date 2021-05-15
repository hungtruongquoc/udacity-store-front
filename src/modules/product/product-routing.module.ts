import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductDetailResolverService} from "../../services/product-detail-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent,
    resolve: {
      detail: ProductDetailResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
