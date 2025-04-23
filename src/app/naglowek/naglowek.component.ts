import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-naglowek',
  templateUrl: './naglowek.component.html',
  styleUrls: ['./naglowek.component.css']
})
export class NaglowekComponent {
  hover = false;

  get text(): string {
    return this.hover ? 'Sklep TAIiB :)' : 'Sklep TAIiB';
  }
}