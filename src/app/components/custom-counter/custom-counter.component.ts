import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { customCounter } from '../../store/counter.action';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-counter',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatCardModule, MatSelectModule, FormsModule],
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.css'
})
export class CustomCounterComponent {
  customValue!: number;
  customType: string = 'add';

  constructor(private store: Store<{ counter: { counter: number } }>) { }

  increment(): void {
    this.store.dispatch(customCounter({ customValue: +this.customValue, customAction: this.customType }))
  }
}
