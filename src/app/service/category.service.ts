import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Category} from '../model/category';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/categories');
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(API_URL + '/categories/' + id);
  }

  saveCategory(category: Category): Observable<any> {
    return this.http.post(API_URL + '/categories', category);
  }

  updateCategory(id: number, category: Category): Observable<any> {
    return this.http.put(API_URL + '/categories/' + id, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(API_URL + '/categories/' + id);
  }
}

