import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { AuthService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { ImageUploadComponent } from '../../../shared/image-upload/image-upload.component';

@Component({
  selector: 'app-create-product',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ImageUploadComponent,
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
})
export class ProductCreateComponent {
  @ViewChild('imageUpload') imageUploadComponent!: ImageUploadComponent;
  productForm!: FormGroup;
  selectedImage: File | null = null;
  imgBaseUrl = environment.apiBaseUrl;
  submitted: boolean = false;
  productId: string | null;
  buttonMsg: string = 'Add';
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private authService: AuthService
  ) {
    const userId = this.authService.getUserId();
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      brandName: [''],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: [0, Validators.required],
      createdBy: [userId, Validators.required],
    });
    // Check if we are in edit mode
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.buttonMsg = 'Edit';
      this.loadProduct();
    }
  }

  loadProduct() {
    this.productService.getProductById(this.productId!).subscribe((product) => {
      this.productForm.patchValue(product.data);
      this.imageUploadComponent.previewUrl =
        this.imgBaseUrl + product.data.imageUrl;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    const formData = new FormData();
    formData.append('name', this.productForm.value.name);
    formData.append('brandName', this.productForm.value.brandName);
    formData.append('category', this.productForm.value.category);
    formData.append('price', this.productForm.value.price);
    formData.append('quantity', this.productForm.value.quantity);
    formData.append('createdBy', this.productForm.value.createdBy); // or pull from token/session
    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    } else if (!this.productId) {
      console.warn('No image selected.');
      alert('No image selected.');
      return;
    } // file input
    if (this.productId) {
      this.productService
        .updateProduct(this.productId, formData)
        .subscribe(() => {
          alert('Product updated');
          this.router.navigate(['/products']);
        });
    } else {
      this.productService.createProduct(formData).subscribe({
        next: () => {
          this.resetProductForm();
          alert('Product created');
        },
        error: (err) => console.error('Error creating user', err),
      });
    }
  }

  resetProductForm() {
    this.productForm.reset();
    this.imageUploadComponent.clear();
  }

  onImageSelected(file: File) {
    this.selectedImage = file;
  }

  // Form Getters
  get name() {
    return this.productForm.get('name');
  }
  get brandName() {
    return this.productForm.get('brandName');
  }
  get category() {
    return this.productForm.get('category');
  }
  get price() {
    return this.productForm.get('price');
  }
  get quantity() {
    return this.productForm.get('quantity');
  }
}
