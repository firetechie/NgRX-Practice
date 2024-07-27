import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component';
import { CustomCounterComponent } from './components/custom-counter/custom-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CounterDisplayComponent,
    CounterButtonsComponent,
    CustomCounterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NgRX Practice';
}
