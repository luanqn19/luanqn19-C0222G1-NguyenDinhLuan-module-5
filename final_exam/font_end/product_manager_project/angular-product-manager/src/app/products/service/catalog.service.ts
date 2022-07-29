import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Catalog} from '../model/catalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private URL_CATALOG_API = 'http://localhost:3000/catalogs';
  private URL_CATALOG_API_BACKEND = 'http://localhost:8080/product-api/catalogs-list';

  constructor(private httpClient: HttpClient) {
  }

  getAllCatalog(): Observable<Catalog[]> {
    return this.httpClient.get<Catalog[]>(this.URL_CATALOG_API_BACKEND);
  }
}
