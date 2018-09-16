import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListApplicationComponent } from './list-application/list-application.component';
import { AuthGuard } from './share/auth.guard';

const routes: Routes = [
  {path: '', component: ListApplicationComponent},
  {path: 'users', loadChildren: './user/user.module#UserModule' },
  {path: 'products', loadChildren: './products/products.module#ProductsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
