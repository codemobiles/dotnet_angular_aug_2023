import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.scss'],
})
export class StockEditComponent implements OnInit {
  imageURL = null;
  imageFile = null;
  formProduct!: FormGroup;
  originalImage = null;
  constructor(
    public rest: RestService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    const data = await lastValueFrom(this.rest.getProductById(productId));
    this.originalImage = data.image;
    this.initForm(data);
  }

  initForm(data: any) {
    this.formProduct = new FormGroup({
      id: new FormControl(data.productId, [Validators.required]),
      name: new FormControl(data.name, [Validators.required]),
      price: new FormControl(data.price, [Validators.required]),
      stock: new FormControl(data.stock, [Validators.required]),
      image: new FormControl(null, []),
    });
  }

  async onSubmit() {
    if (this.formProduct != null) {
      let formData = new FormData();

      const { id, name, price, stock } = this.formProduct.value;
      formData.append('ProductId', id);
      formData.append('name', name);
      formData.append('stock', stock);
      formData.append('price', price);

      if (this.imageFile != null) {
        formData.append('file', this.imageFile);
      }

      await lastValueFrom(this.rest.updateProduct(formData));
      this.location.back();
    }
  }

  onChangeImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        this.imageURL = event.target.result;
        this.originalImage = null;
      };

      reader.readAsDataURL(event.target.files[0]);
      this.imageFile = event.target.files[0];
    }
  }

  onClickCancel() {
    this.location.back();
  }
}
