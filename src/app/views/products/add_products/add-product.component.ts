import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from "../../../service/product.service"
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  ContainerComponent
} from '@coreui/angular';
import { CATEGORY, RESPONSE } from 'src/app/model/product';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ContainerComponent,
    RouterLink,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  productCategory: CATEGORY[] = []
  selectedImages: { [key: string]: string | ArrayBuffer | null } = {};
  constructor(private fb: FormBuilder,
    private productService: ProductService
  ) {
    this.productForm = this.fb.group({
      productName: [''],
      productDescription: [''],
      modelFrontShot: [''],
      modelRightSideShot: [''],
      modelLeftSideShot: [''],
      modelBackSideShot: [''],
      modelAngle45Shot: [''],
      price: [''],
      quantity: [''],
      category: [''],
      skuCode: [''],
      instock: [true],
      isDeleted: [false]
    });
  }
  ngOnInit() {
    this.getProductCategory()
  }

  onFileSelected(event: Event, imageType: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.selectedImages[imageType] = e.target?.result as string;
        switch (imageType) {
          case 'frontShot':
            this.productForm.controls['modelFrontShot'].patchValue(file);
            break;
          case 'rightSideShot':
            this.productForm.controls['modelRightSideShot'].patchValue(file);
            break;
          case 'leftSideShot':
            this.productForm.controls['modelLeftSideShot'].patchValue(file);
            break;
          case 'backShot':
            this.productForm.controls['modelBackSideShot'].patchValue(file);
            break;
          case 'angleShot':
            this.productForm.controls['modelAngle45Shot'].patchValue(file);
            break;
          default:
            console.warn('Unknown image type selected.');
            break;
        }
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
    } else {
      console.log("Form is invalid");
    }
  }
  getProductCategory() {
    this.productService.getProductCategory().subscribe(res => {
      this.productCategory = res.data
    })
  }
}
