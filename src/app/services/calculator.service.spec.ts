import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // ── add ──
  it('should add two positive numbers', () => {
    expect(service.add(2, 3)).toBe(5);
  });

  it('should add negative numbers', () => {
    expect(service.add(-1, -4)).toBe(-5);
  });

  // ── subtract ──
  it('should subtract two numbers', () => {
    expect(service.subtract(10, 4)).toBe(6);
  });

  // ── multiply ──
  it('should multiply two numbers', () => {
    expect(service.multiply(3, 7)).toBe(21);
  });

  it('should return 0 when multiplying by zero', () => {
    expect(service.multiply(5, 0)).toBe(0);
  });

  // ── divide ──
  it('should divide two numbers', () => {
    expect(service.divide(10, 2)).toBe(5);
  });

  it('should throw when dividing by zero', () => {
    expect(() => service.divide(10, 0)).toThrowError(
      'No se puede dividir entre cero'
    );
  });

  // ── isEven ──
  it('should return true for even numbers', () => {
    expect(service.isEven(4)).toBe(true);
  });

  it('should return false for odd numbers', () => {
    expect(service.isEven(7)).toBe(false);
  });
});
