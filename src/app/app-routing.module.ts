import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/products', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: 'products',
    loadChildren: () => import('../modules/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../modules/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
