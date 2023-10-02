import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl="http://localhost:3000/api/v1/products"
  constructor(private _htpp:HttpClient) { }

  getAllProducts(){
    return this._htpp.get(this.baseUrl)
  }

}
