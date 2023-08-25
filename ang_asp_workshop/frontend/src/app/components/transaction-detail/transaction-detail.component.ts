import { RestService } from 'src/app/services/rest.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent implements OnInit {
  displayedColumns = ['image', 'name', 'price', 'qty'];
  dataSource = new MatTableDataSource<any>();
  constructor(public rest: RestService) {}

  ngOnInit() {}

  async load(id: string) {
    let result = await lastValueFrom(this.rest.getTransactionById(id));
    console.log(JSON.stringify(result));
    this.dataSource.data = JSON.parse(result.orderList);
  }
}
