import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { increment, decrement, reset, titleChange } from '../../../store/counter/counter.action';
import { Counter } from '../../../shared/model/counter';

@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css',
})
export class CounterButtonsComponent {
  constructor(private store: Store<Counter>) { }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  change() {
    this.store.dispatch(titleChange({ title: 'NgRX learning is in progress' }));
  }
}
