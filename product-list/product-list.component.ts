import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products: Array<Product> = [];
  
  constructor(private productService: ProductService){ }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: data => {
        this.products = data;
      },
      error: err => {
        alert(err);
      }
    });
  }

  onSearchByCategory(enterProductName: string){
    this.productService.getAllProducts().subscribe({
      next: data => {
        if(enterProductName || enterProductName !== ''){
          this.products = data.filter((prod) => prod.productName?.toLowerCase().startsWith(enterProductName.toLowerCase()));
        }
        else{
          this.products = data;
        }
      },
      error: err => {
        alert('Failed to fetch products, please try again !');
      },
    });
  }

  filterCakes(){
    this.productService.getAllProducts().subscribe({
      next: data => {
        this.products = data.filter((item) => item.category?.match("Cakes"));
      }
    });
  }

  filterCupcakes(){
    this.productService.getAllProducts().subscribe({
      next: data => {
        this.products = data.filter((item) => item.category?.match("Cupcakes"));
      }
    });
  }

  filterCookies(){
    this.productService.getAllProducts().subscribe({
      next: data => {
        this.products = data.filter((item) => item.category?.match("Cookies"));
      }
    });
  }
  
  filterBrownies(){
    this.productService.getAllProducts().subscribe({
      next: data => {
        this.products = data.filter((item) => item.category?.match("Brownies"));
      }
    });
  }
}
