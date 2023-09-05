import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductOrder } from '../models/product-order';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductOrderService } from '../services/product-order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouteService } from '../services/route.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  
  product?: Product;
  stars: Array<number> = [];

  minDate = new Date();
  
  productOrder: ProductOrder = {};
  quantity = [1 , 2 , 3 , 4];
  
  submitStatus: boolean = false;
  
  constructor(private activatedRoute: ActivatedRoute, private routeService: RouteService ,private productService: ProductService, private productOrderService: ProductOrderService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get("id") ?? "";
      this.productService.getProductById(id).subscribe(data => {
        this.product = data;
        this.stars = new Array(this.product.rating);
        this.submitStatus = false;
      })
    })
  }

  placeOrder(){
    if(this.productOrder.dateOfOrder && this.productOrder.customerName && this.productOrder.customerEmail && this.productOrder.customerPhone && this.productOrder.customerAddress && this.productOrder.quantity){
      this.productOrder.productName = this.product?.productName;
      this.productOrder.productPrice = this.product?.productPrices;
      this.productOrder.id = this.product?.id;
      
      const prc : any = this.product?.productPrices;
      this.productOrder.totalPrice = this.productOrder.quantity * prc;

      const dofOrder: any = this.productOrder?.dateOfOrder.toLocaleDateString('en-US');
      this.productOrder.dateOfOrder = dofOrder;
      
      this.productOrderService.addProductOrder(this.productOrder).subscribe({
        next: data => {
          this.snackbar.open("Order placed successfully !!", "OK" , {
            duration: 5000
          });
          this.submitStatus = true;
          this.routeService.navigateToHomeView();
        },
        error: err => {
          alert(err);
        }
      });
    }
  }

  canDeactivate() : Observable<boolean> {
    if(!this.submitStatus){
      const result = window.confirm('There are unsaved changes. Click Ok to leave this page or Click Cancel to stay on the same page.');
      return of(result);
    }
    return of(true);
  }

}
