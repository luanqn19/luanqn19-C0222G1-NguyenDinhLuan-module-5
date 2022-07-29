import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  idDelete: number;
  product: Product;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private toastr: ToastrService,
              private router: Router) {
  }

  showSuccess() {
    this.toastr.success('Delete ticket successfully!', 'Delete ticket');
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(value => {
      this.idDelete = Number(value[1].path);
      console.log(this.idDelete);
    });
    this.productService.find(this.idDelete).subscribe(value => {
      this.product = value;
      console.log(this.product);
    });
  }

  submitDelete() {
    this.productService.delete(this.idDelete).subscribe(() => {
      this.showSuccess();
    });
    setTimeout(() => {
      this.router.navigateByUrl('/list');
    }, 1000);
  }
}
