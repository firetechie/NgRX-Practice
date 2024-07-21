import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.css',
})
export class CounterDisplayComponent implements OnInit {
  displayCounter!: number;

  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((data) => (this.displayCounter = data.counter));
  }
}
