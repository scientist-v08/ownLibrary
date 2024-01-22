import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card';

@Component({
  selector: 'lib-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() cards: Card[]=[];
}
