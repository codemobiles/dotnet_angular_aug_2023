import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.scss'],
})
export class StockCreateComponent implements OnInit {
  imageURL = null;
  imageFile = null;
  formProduct!: FormGroup;
  constructor(private rest: RestService, private location: Location) {}

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
        Validators.maxLength(10),
      ]),
      stock: new FormControl(10, [Validators.required]),
      price: new FormControl(200, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
    });
  }

  async onSubmit() {
    if (this.formProduct != null && this.imageFile != null) {
      const formData = new FormData();
      formData.append('name', this.formProduct.value.name);
      formData.append('price', this.formProduct.value.price);
      formData.append('stock', this.formProduct.value.stock);
      formData.append('file', this.imageFile);

      await lastValueFrom(this.rest.addProduct(formData));
      this.location.back();
    }
  }

  onClickCancel() {
    this.location.back();
  }
}
