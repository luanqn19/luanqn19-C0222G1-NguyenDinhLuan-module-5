import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {
  idOrder: number;
  product: Product;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(value => {
      this.idOrder = Number(value[1].path);
      console.log(this.idOrder);
    });
    this.productService.find(this.idOrder).subscribe(value => {
      this.product = value;
      console.log(this.product);
    });
  }

  showSuccess() {
    this.toastr.success('Order ticket successfully!', 'Order ticket');
  }

  showOutOfStock() {
    this.toastr.error('Order ticket failed. This ticket have out of stock', 'Order ticket');
  }

  submitOrder() {
    if (this.product.amount === 0) {
      this.showOutOfStock();
    } else {
      this.product.amount -= 1;
      this.productService.edit(this.product).subscribe(() => {
        this.showSuccess();
      });
    }
    setTimeout(() => {this.router.navigateByUrl('/list'); }, 800);
  }
}
