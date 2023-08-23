import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StockComponent } from './components/stock/stock.component';
import { ReportComponent } from './components/report/report.component';
import { ShopComponent } from './components/shop/shop.component';
import { StockCreateComponent } from './components/stock-create/stock-create.component';
import { StockEditComponent } from './components/stock-edit/stock-edit.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { authenGuard } from './services/authen.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  // { path: 'extra', component: ExtraComponent },
  { path: 'login', component: LoginComponent, canActivate: [authenGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'stock', component: StockComponent, canActivate: [authenGuard] },
  {
    path: 'stock/create',
    component: StockCreateComponent,
    canActivate: [authenGuard],
  },
  {
    path: 'stock/edit/:id',
    component: StockEditComponent,
    canActivate: [authenGuard],
  },
  { path: 'shop', component: ShopComponent, canActivate: [authenGuard] },
  { path: 'report', component: ReportComponent, canActivate: [authenGuard] },
  {
    path: 'transaction',
    component: TransactionComponent,
    canActivate: [authenGuard],
  },
  { path: '**', redirectTo: 'login' }, // undefined pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
