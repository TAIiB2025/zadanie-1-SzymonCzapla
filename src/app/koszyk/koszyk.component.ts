import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']
})
export class KoszykComponent {
  @Input() wartoscKoszyka: number = 0;
  @Output() wyczysc = new EventEmitter<void>();

  wyczyscKoszyk() {
    this.wyczysc.emit();
  }
}