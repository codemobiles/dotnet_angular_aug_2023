import { RestService } from './../../services/rest.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { firstValueFrom, lastValueFrom, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit, AfterViewInit {
  displayedColumns = ['productId', 'image', 'name', 'price', 'stock', 'action'];
  dataSource = new MatTableDataSource<Product>();
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  searchValue = '';

  searchTerm = new Subject<string>();

  constructor(public rest: RestService, private dialog: MatDialog) {}

  async ngOnInit() {
    // this.rest.getProducts().subscribe((result) => {
    //   this.dataSource.data = result;
    // });

    this.dataSource.data = await firstValueFrom(this.rest.getProducts());

    this.rest.listenSearchEvents(this.searchTerm).subscribe((result) => {
      this.dataSource.data = result;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public get numberOfRow(): string {
    if (this.dataSource.data) {
      return this.dataSource.data.length.toString();
    }
    return '0';
  }

  async onClickDelete(row: any) {
    const dialogConfirm = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'ลบสินค้า',
        subtitle: 'คุณต้องการลบสินค้านี้ใช่หรือไม่?',
        item: row,
      },
    });

    let result = await lastValueFrom(dialogConfirm.afterClosed());
    if (result) {
      // alert('Delete confirmed');

      await lastValueFrom(this.rest.deleteProduct(row.productId));
      this.dataSource.data = await lastValueFrom(this.rest.getProducts());
    }
  }

  async doFilter(event: any) {
    // do local
    // this.dataSource.filter = event.target.value.trim();
    // do remote
    // this.dataSource.data = await lastValueFrom(
    //   this.rest.getProductByKeyword(event.target.value)
    // );

    this.searchTerm.next(event.target.value);
  }

  clearSearch() {
    this.searchValue = '';
    this.searchTerm.next('');
  }
}
