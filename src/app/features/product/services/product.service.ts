import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/product/create`, product);
  }

  getAllProduct(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/product/all`);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/product/delete/${id}`);
  }

  getProductById(id: string): Observable<{ msg: string; data: Product }> {
    return this.http.get<{ msg: string; data: Product }>(`${this.baseUrl}/product/${id}`);
  }

  updateProduct(id: string, data: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/product/update/${id}`, data);
  }
}
