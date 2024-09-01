import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { App } from '../../shared/model/app';
import { Store } from '@ngrx/store';
import { getSpinner } from '../../store/global/app.selector';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent implements OnInit {
  isLoader: boolean = false;

  constructor(private store: Store<App>) { }

  ngOnInit(): void {
    this.store.select(getSpinner).subscribe((res) => this.isLoader = res);
  }
}
