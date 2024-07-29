import { Component } from '@angular/core';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { CustomCounterComponent } from './custom-counter/custom-counter.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    CounterDisplayComponent,
    CounterButtonsComponent,
    CustomCounterComponent,
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

}
