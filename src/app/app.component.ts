import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card, CardListComponent } from 'ui-contr';
import { assassins } from './assassins';

@Component({
  selector: 'dd-root',
  standalone: true,
  imports: [CommonModule,CardListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  cards:Card[]=assassins;
}
