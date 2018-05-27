import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: any;
  constructor(private _productSrv: ProductService) { }

  ngOnInit() {
    this._productSrv.index().subscribe(
      products => this.products = JSON.stringify(products));
  }
}
