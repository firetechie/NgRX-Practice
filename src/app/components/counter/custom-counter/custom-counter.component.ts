import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { Counter } from '../../../shared/model/counter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getTitle } from '../../../store/counter/counter.selector';
import { customCounter } from '../../../store/counter/counter.action';
import { AppState } from '../../../shared/model/global/app-state';

@Component({
  selector: 'app-custom-counter',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, MatCardModule, MatSelectModule, FormsModule, MatFormFieldModule],
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.css'
})
export class CustomCounterComponent implements OnInit {
  customValue!: number;
  customType: string = 'add';
  errorMessage: string = '';
  title$ !: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.title$ = this.store.select(getTitle);
  }

  submit(): void {
    if (this.customValue && this.customType) {
      this.store.dispatch(customCounter({ customValue: +this.customValue, customAction: this.customType }))
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Field should not be empty'
    }
  }
}
