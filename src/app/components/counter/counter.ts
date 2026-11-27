import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div class="counter">
      <h2>Contador: {{ count() }}</h2>
      <button class="btn-increment" (click)="increment()">+1</button>
      <button class="btn-decrement" (click)="decrement()">-1</button>
      <button class="btn-reset" (click)="reset()">Reset</button>
    </div>
  `,
  styles: [`
    .counter { text-align: center; margin: 2rem; }
    button { margin: 0.5rem; padding: 0.5rem 1rem; cursor: pointer; }
  `],
})
export class CounterComponent {
  readonly count = signal(0);

  increment(): void {
    this.count.update((v) => v + 1);
  }

  decrement(): void {
    this.count.update((v) => v - 1);
  }

  reset(): void {
    this.count.set(0);
  }
}
