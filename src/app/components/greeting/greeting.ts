import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  template: `
    <div class="greeting">
      @if (name()) {
        <p class="message">¡Hola, {{ name() }}! Bienvenido a CI/CD Angular.</p>
      } @else {
        <p class="message">¡Hola, visitante! Bienvenido a CI/CD Angular.</p>
      }
    </div>
  `,
  styles: [`
    .greeting { padding: 1rem; text-align: center; }
    .message  { font-size: 1.25rem; }
  `],
})
export class GreetingComponent {
  readonly name = input<string>('');
}
