import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';
import {Observable} from 'rxjs';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private URL_PRODUCT_API = 'http://localhost:3000/products';
  private URL_PRODUCT_API_BACKEND = 'http://localhost:8080/product-api';
  private formProduct: FormGroup = new FormGroup(
    {
      idProduct: new FormControl(),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      fromPlace: new FormControl('', Validators.required),
      toPlace: new FormControl('', Validators.required),
      amount: new FormControl(0, [Validators.required, Validators.min(0)]),
      dateStart: new FormControl('', [Validators.required]),
      timeStart: new FormControl('', Validators.required),
      catalog: new FormControl('', Validators.required),
    });

  constructor(private httpClient: HttpClient) {
  }

  getForm(): FormGroup {
    return this.formProduct;
  }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL_PRODUCT_API_BACKEND + '/products-list');
  }

  getDataForm(formProduct: FormGroup): Product {
    return {
      fromPlace: formProduct.value.fromPlace,
      toPlace: formProduct.value.toPlace,
      dateStart: formProduct.value.dateStart,
      price: formProduct.value.price,
      amount: formProduct.value.amount,
      timeStart: formProduct.value.timeStart,
      catalog: formProduct.value.catalog
    };
  }

  save(formProduct: FormGroup): Observable<Product> {
    const product: Product = this.getDataForm(formProduct);
    return this.httpClient.post<Product>(this.URL_PRODUCT_API_BACKEND + '/save-product', product);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URL_PRODUCT_API_BACKEND + '/products-list/' + id);
  }

  edit(product: Product): Observable<void> {
    return this.httpClient.patch<void>(this.URL_PRODUCT_API_BACKEND + '/edit-product', product);
  }

  find(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.URL_PRODUCT_API_BACKEND + '/products-list/' + id);
  }

  searchFrom(fromPlace: string, toPlace: string, date1: string, date2: string): Observable<Product[]> {
    console.log('fromPlace:' + fromPlace);
    console.log('toPlace:' + toPlace);
    console.log('date1:' + date1);
    console.log('date2:' + date2);
    if (fromPlace !== null && toPlace !== null && date1 !== null && date2 !== null) {
      return this.httpClient
        // tslint:disable-next-line:max-line-length
        .get<Product[]>(this.URL_PRODUCT_API_BACKEND + `/search?fromPlace=${fromPlace.trim()}` + `&toPlace=${toPlace.trim()}` + `&dateS=${date1.trim()}` + `&dateE=${date2.trim()}`);
    } else if (fromPlace !== null && toPlace !== null && date1 === null && date2 === null) {
      return this.httpClient
        // tslint:disable-next-line:max-line-length
        .get<Product[]>(this.URL_PRODUCT_API_BACKEND + `/search-from-and-to?fromPlace=${fromPlace.trim()}` + `&toPlace=${toPlace.trim()}`);
    } else if (fromPlace !== null || toPlace !== null && date1 === null && date2 === null) {
      if (fromPlace !== null) {
        return this.httpClient
          .get<Product[]>(this.URL_PRODUCT_API_BACKEND + `/search-from?fromPlace=${fromPlace.trim()}`);
      } else if (toPlace !== null) {
        return this.httpClient
          .get<Product[]>(this.URL_PRODUCT_API_BACKEND + `/search-to?toPlace=${toPlace.trim()}`);
      }
    } else {
      return this.httpClient.get<Product[]>(this.URL_PRODUCT_API_BACKEND);
    }
  }

  searchTo(s: string): Observable<Product[]> {
    if (s) {
      return this.httpClient
        .get<Product[]>(this.URL_PRODUCT_API_BACKEND + '/products-list/to/' + s);
    } else {
      return this.httpClient.get<Product[]>(this.URL_PRODUCT_API_BACKEND + '/products-list');
    }
  }

  checkDateValidate(abstractControl: AbstractControl): any {
    const currentDate: Date = new Date();
    console.log(currentDate.getDay());
    console.log(currentDate.getMonth());
    console.log(currentDate.getFullYear());
    const pickDate = abstractControl.value;
    const year = pickDate.substr(0, 4);
    console.log(year);
    const month = pickDate.substr(5, 2);
    console.log(month);
    const day = pickDate.substr(8, 2);
    console.log(day);
    if (year === currentDate.getFullYear()) {
      if (month === currentDate.getMonth()) {
        if (day <= currentDate.getDay()) {
          return {validateDay: true};
        } else if (day > currentDate.getDay()) {
          return Number(day) - currentDate.getDay() >= 1 ? null : {validateDay: true};
        }
      } else if (month > currentDate.getMonth()) {
        return null;
      } else {
        return {validateDay: true};
      }
    } else if (year > currentDate.getFullYear()) {
      return null;
    } else {
      return {validateDay: true};
    }
  }
}
