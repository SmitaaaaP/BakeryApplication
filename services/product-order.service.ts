import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductOrder } from '../models/product-order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductOrderService {

  url1: string = "http://localhost:8087/api/v1/customers";
  url2: string = "http://localhost:8087/api/v1/customer";

  constructor(private http : HttpClient) { }

  getAllProductOrders() : Observable<any> {
    return this.http.get<any>(`${this.url1}`);
  }

  addProductOrder(productOrder ?: ProductOrder) : Observable<ProductOrder> {
    return this.http.post<ProductOrder>(`${this.url2}` , productOrder);
  }
}
