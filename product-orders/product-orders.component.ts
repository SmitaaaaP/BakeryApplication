import { Component, OnInit } from '@angular/core';
import { ProductOrder } from '../models/product-order';
import { ProductOrderService } from '../services/product-order.service';

@Component({
  selector: 'app-product-orders',
  templateUrl: './product-orders.component.html',
  styleUrls: ['./product-orders.component.css']
})
export class ProductOrdersComponent implements OnInit{
  
  displayColumns: string[] = ['id' , 'dateOfOrder' , 'productName' , 'customerName' , 'customerEmail' , 'customerPhone' , 'customerAddress' , 'quantity' , 'messageOnProduct', 'totalPrice'];
  
  productOrders: ProductOrder[] = [];

  constructor(private productOrderService: ProductOrderService) { }
  
  ngOnInit(): void {
    this.productOrderService.getAllProductOrders().subscribe({
      next: data => {
        this.productOrders = data;
      },
      error: err => {
        alert(err);
      }
    });
  }
}
