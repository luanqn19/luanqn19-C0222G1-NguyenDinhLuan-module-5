import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
import {FormGroup} from '@angular/forms';
import {Catalog} from '../model/catalog';
import {CatalogService} from '../service/catalog.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  p = 1;
  products: Product[];
  catalogs: Catalog[];
  formProduct: FormGroup;

  constructor(private productService: ProductService,
              private catalogService: CatalogService,
              private toastr: ToastrService,
              private router: Router) {
  }

  showSuccess() {
    this.toastr.success('Add new data successfully!', 'Add New');
  }

  notFoundSearch() {
    this.toastr.error('Not found!', 'Search!');
  }

  ngOnInit(): void {
    // Product List
    this.productService.getAllProduct().subscribe(value => {
      this.products = value;
    });
    // Catalog List
    this.catalogService.getAllCatalog().subscribe(value => {
      this.catalogs = value;
    });
    // Get FormGroup
    this.formProduct = this.productService.getForm();
  }

  addNewProduct() {
    this.productService.save(this.formProduct).subscribe(value => {
      this.showSuccess();
      this.ngOnInit();
    });
  }

  searchFrom(s: string) {
    console.log(s);
    this.productService.searchFrom(s).subscribe(value => {
      if (value.length === 0) {
        this.notFoundSearch();
      } else {
        this.products = value;
      }
    });
  }
  searchTo(s: string) {
    console.log(s);
    this.productService.searchTo(s).subscribe(value => {
      if (value.length === 0) {
        this.notFoundSearch();
      } else {
        this.products = value;
      }
    });
  }
}
