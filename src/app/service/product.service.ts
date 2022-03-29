import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../model/product';

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/products');
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(API_URL + '/products/' + id);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(API_URL + '/products', product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/products/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(API_URL + '/products/' + id);
  }
}
