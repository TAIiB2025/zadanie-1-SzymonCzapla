import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() produkt!: Product;
  @Input() iloscWKoszyku: number = 0;
  @Output() dodaj = new EventEmitter<void>();
  
  showDetails = true;

  dodajDoKoszyka() {
    this.dodaj.emit();
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}