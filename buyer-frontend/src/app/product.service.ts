import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {
  constructor(private _http: Http) { }
  index() {
    return this._http.get('api/products').map(r => r.json();
  }
}
