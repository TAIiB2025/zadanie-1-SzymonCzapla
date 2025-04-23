import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { ProductComponent } from './product/product.component';
import { Product } from './models/product.model';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    NaglowekComponent,
    KoszykComponent,
    ProductComponent
  ]
})
export class AppComponent {
  showProducts = true;

  produkty: Product[] = [
    new Product('Produkt 1', 20.00, new Date(2001, 8, 30), true),
    new Product('Produkt 2', 35.50, new Date(2020, 4, 15), false),
    new Product('Produkt 3', 49.99, new Date(2022, 10, 1), true),
    new Product('Produkt 4', 10.00, new Date(2018, 2, 12), false),
    new Product('Produkt 5', 100.00, new Date(2023, 6, 7), true),
  ];

  koszykWartosc = 0;
  ilosciWKoszyku: { [key: string]: number } = {};

  dodajDoKoszyka(produkt: Product) {
    this.koszykWartosc += produkt.cena;
    const key = produkt.nazwa;
    if (!this.ilosciWKoszyku[key]) {
      this.ilosciWKoszyku[key] = 1;
    } else {
      this.ilosciWKoszyku[key]++;
    }
  }

  wyczyscKoszyk() {
    this.koszykWartosc = 0;
    this.ilosciWKoszyku = {};
  }

  toggleProdukty() {
    this.showProducts = !this.showProducts;
  }
}