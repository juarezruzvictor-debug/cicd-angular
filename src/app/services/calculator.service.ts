import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  /**
   * Suma dos números.
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Resta dos números.
   */
  subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Multiplica dos números.
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Divide dos números. Lanza error si el divisor es 0.
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('No se puede dividir entre cero');
    }
    return a / b;
  }

  /**
   * Comprueba si un número es par.
   */
  isEven(n: number): boolean {
    return n % 2 === 0;
  }
}
