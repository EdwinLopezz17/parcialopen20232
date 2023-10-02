import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BundleService {

  baseUrl="http://localhost:3000/api/v1/bundles"

  constructor(private _http:HttpClient) { }

  getAllBundles(){
    return  this._http.get(this.baseUrl)
  }
}
