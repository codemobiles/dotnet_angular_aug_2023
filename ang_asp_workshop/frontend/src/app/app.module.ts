import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DemoComponent } from './components/demo/demo.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StockComponent } from './components/stock/stock.component';
import { StockEditComponent } from './components/stock-edit/stock-edit.component';
import { StockCreateComponent } from './components/stock-create/stock-create.component';
import { ReportComponent } from './components/report/report.component';
import { ShopComponent } from './components/shop/shop.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { ConfirmCreateDialogComponent } from './components/confirm-create-dialog/confirm-create-dialog.component';
import { authInterceptor } from './services/auth.interceptor';
import { CustomPipe } from './pipes/custom.pipe';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    StockComponent,
    StockEditComponent,
    StockCreateComponent,
    ReportComponent,
    ShopComponent,
    PaymentComponent,
    TransactionComponent,
    TransactionDetailComponent,
    ConfirmDialogComponent,
    SuccessDialogComponent,
    ConfirmCreateDialogComponent,
    CustomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
