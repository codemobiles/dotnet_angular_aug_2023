import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent implements OnInit {
  order_list: Product[] = [];
  constructor(private rest: RestService) {}

  ngOnInit(): void {}

  async load(id: string) {
    const response = await lastValueFrom(this.rest.getTransactionById(id));
    this.order_list = JSON.parse(response.orderList);
  }
}
