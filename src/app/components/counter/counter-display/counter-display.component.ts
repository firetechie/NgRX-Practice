import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getCounter } from '../../../store/counter/counter.selector';
import { Counter } from '../../../shared/model/counter';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.css',
})
export class CounterDisplayComponent implements OnInit {
  displayCounter!: number;
  title: string = '';
  counter$ !: Observable<number>;

  constructor(private store: Store<Counter>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }
}
