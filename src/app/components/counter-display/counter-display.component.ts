import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Counter } from '../../shared/model/counter';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getCounter } from '../../store/counter.selector';

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

  constructor(private store: Store<{ counter: Counter }>) { }

  ngOnInit(): void {
    // this.store
    //   .select('counter')
    //   .subscribe((data) => {
    //     this.displayCounter = data.counter;
    //     this.title = data.title;
    //   });
    this.counter$ = this.store.select(getCounter);
  }
}
