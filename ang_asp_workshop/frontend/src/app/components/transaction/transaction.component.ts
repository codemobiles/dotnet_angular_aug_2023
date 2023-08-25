import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TransactionDetailComponent } from '../transaction-detail/transaction-detail.component';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'transactionId',
    'timestamp',
    'employeeId',
    'total',
    'paid',
    'discount',
    'orderList',
  ];
  dataSource = new MatTableDataSource<any>();

  @ViewChild('detail', { static: false })
  detailTransaction!: TransactionDetailComponent;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  selectedId!: string;

  constructor(private rest: RestService) {}

  async ngOnInit() {
    this.rest.getTransaction().subscribe((result) => {
      this.dataSource.data = result;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getNumberOfSKU(rawOrder: any): number {
    let order = JSON.parse(rawOrder);
    return order.length;
  }

  onClickRow(id: string) {
    this.selectedId = id;
    setTimeout(() => {
      // this.detailComponent.load(this.selectedId);
    }, 100);
  }
}
