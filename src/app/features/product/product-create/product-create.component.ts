import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-create-product',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
})
export class ProductCreateComponent {
  productForm!: FormGroup;
  submitted: boolean = false;
  productId: string | null;
  buttonMsg:string="Add";
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
      this.buttonMsg="Edit";
      this.loadProduct();
    }
  }

  loadProduct() {
    this.productService.getProductById(this.productId!).subscribe((product) => {
      this.productForm.patchValue(product.data);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    if (this.productId) {
      this.productService
        .updateProduct(this.productId, this.productForm.value)
        .subscribe(() => {
          alert('Product updated');
          this.router.navigate(['/products']);
        });
    } else {
      const product: Product = this.productForm.value;
      this.productService.createProduct(product).subscribe({
        next: (created) => {
          this.productForm.reset();
          alert('Product created');
        },
        error: (err) => console.error('Error creating user', err),
      });
    }
  }

  resetProductForm() {
    this.productForm.reset();
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
