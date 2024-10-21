import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { PRODUCT, RESPONSE } from "../model/product"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BasePath = environment.BasePath
  constructor(private http: HttpClient) { }
  addProduct(payload: PRODUCT) {
    return this.http.post(`${this.BasePath}/create_product`, payload)
  }
  getProductCategory():Observable<RESPONSE> {
    return this.http.get<RESPONSE>(`${this.BasePath}/category_list`)
  }
  getAllPrroductList():Observable<RESPONSE>{
    return this.http.get<RESPONSE>(`${this.BasePath}/product_list`)
  }

}
