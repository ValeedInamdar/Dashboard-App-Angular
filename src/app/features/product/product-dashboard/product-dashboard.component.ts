import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-dashboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.css',
})
export class ProductDashboardComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService,private router:Router) {}
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProduct().subscribe({
      next: (value) => {
        this.productList = value.data;
      },
      error: (err) => console.error(err),
    });
  }

  deleteProduct(id: string) {
    if (confirm('Are you sure you want to delete this?')) {
      this.productService.deleteProduct(id).subscribe({
        next: (value) => {
          alert('Product deleted successfully');
          this.getAllProducts();
        },
        error: (err) => console.error(err),
      });
    } else {
      console.log('Deletion cancelled.');
    }
  }

  editProduct(id: string) {
    this.router.navigate(['/products/edit', id]);
  }
}
