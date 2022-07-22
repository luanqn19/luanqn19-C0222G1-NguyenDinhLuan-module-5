import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router : Router) {
  }

  ngOnInit(): void {
    let id =  this.route.snapshot.params.id;
    console.log(this.productService.findById(id));
    this.productForm.patchValue(this.productService.findById(id));
  }

  submit() {
    const product = this.productForm.value;
    this.productService.edit(product);
    this.router.navigateByUrl('product/list')
  }
}
