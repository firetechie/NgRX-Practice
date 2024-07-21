import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './../../store/counter.action';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css',
})
export class CounterButtonsComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
