import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';
import { ConfirmCreateDialogComponent } from '../confirm-create-dialog/confirm-create-dialog.component';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.scss'],
})
export class StockCreateComponent implements OnInit {
  imageURL = null;
  imageFile = null;
  formProduct!: FormGroup;
  constructor(
    private rest: RestService,
    private location: Location,
    private dialog: MatDialog
  ) {}

  onChangeImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      // for preview
      reader.onload = (event: any) => {
        this.imageURL = event.target.result;
      };

      // for upload
      reader.readAsDataURL(event.target.files[0]);
      this.imageFile = event.target.files[0];
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formProduct = new FormGroup({
      name: new FormControl('Your Product', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      stock: new FormControl(10, [Validators.required]),
      price: new FormControl(200, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
    });
  }

  async onSubmit() {
    const dialogConfirm = this.dialog.open(ConfirmCreateDialogComponent, {
      data: {
        title: 'ยืนยันการสร้าง',
        subtitle: 'คุณต้องการสร้างสินค้านี้ใช่หรือไม่?',
        item: { ...this.formProduct.value, image: this.imageURL },
      },
    });

    let result = await lastValueFrom(dialogConfirm.afterClosed());

    if (result && this.formProduct != null && this.imageFile != null) {
      const formData = new FormData();
      formData.append('name', this.formProduct.value.name);
      formData.append('price', this.formProduct.value.price);
      formData.append('stock', this.formProduct.value.stock);
      formData.append('file', this.imageFile);

      try {
        await lastValueFrom(this.rest.addProduct(formData));
      } catch (e) {
        alert(JSON.stringify(e));
      }

      this.location.back();
    }
  }

  onClickCancel() {
    this.location.back();
  }
}
