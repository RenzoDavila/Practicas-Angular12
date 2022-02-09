import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/model/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() {}

  ngOnInit(): void {}

  share() {
    window.alert('Producto compartido!');
  }

  onNotify() {
    window.alert('Seras notificado cuando el producto este a la venta');
  }
}
