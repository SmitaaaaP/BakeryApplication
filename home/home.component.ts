import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  
  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: data => {
        this.products = data;
      },
      error: err => {
        alert('Failed to fetch products, please try again !');
      },
    });
  }
}
