import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent implements OnInit {
  orderString = '[]';
  constructor(private rest: RestService) {}

  ngOnInit(): void {}

  async load(id: string) {
    const response = await lastValueFrom(this.rest.getTransactionById(id));
    this.orderString = JSON.stringify(response);
  }
}
