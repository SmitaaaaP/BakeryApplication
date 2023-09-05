import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(this.url);
  }

  getProductById(id?: string): Observable<Product>{
    console.log(id);
    return this.http.get<Product>(`${this.url}/${id}`);
  } 
}
