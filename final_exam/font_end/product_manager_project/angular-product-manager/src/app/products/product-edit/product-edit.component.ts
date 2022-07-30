import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Catalog} from '../model/catalog';
import {CatalogService} from '../service/catalog.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  catalogs: Catalog[];

  formProduct: FormGroup = new FormGroup({
    idProduct: new FormControl(),
    fromPlace: new FormControl(Validators.required),
    toPlace: new FormControl(Validators.required),
    dateStart: new FormControl(Validators.required),
    price: new FormControl([Validators.required, Validators.min(0)]),
    amount: new FormControl([Validators.required, Validators.min(0)]),
    timeStart: new FormControl(Validators.required),
    catalog: new FormControl(Validators.required),
  });

  idEdit: number;

  constructor(private productService: ProductService,
              private catalogService: CatalogService,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.catalogService.getAllCatalog().subscribe(value => {
      this.catalogs = value;
    });
    this.activatedRoute.url.subscribe(value => {
      this.productService.find(Number(value[1].path)).subscribe(obj => {
        console.log(obj);
        this.formProduct.patchValue(obj);
      });
    });
  }

  showSuccess() {
    this.toastr.success('Edit data successfully!', 'Edit Product');
  }

  editProduct() {
    const product = this.formProduct.value;
    this.productService.edit(product).subscribe(() => {
      this.showSuccess();
    });
    setTimeout(() => {
      this.router.navigateByUrl('/list');
    }, 1000);
  }

  compareByObjectId(itemOne, itemTwo) {
    // tslint:disable-next-line:triple-equals
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }
}
