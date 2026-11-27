import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter';
import { GreetingComponent } from './components/greeting/greeting';

@Component({
  imports: [RouterOutlet, CounterComponent, GreetingComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cicd-angular');
}

