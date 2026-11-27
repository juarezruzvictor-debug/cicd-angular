import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter';

describe('CounterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should start at 0', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    expect(fixture.componentInstance.count()).toBe(0);
  });

  it('should increment', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.componentInstance.increment();
    expect(fixture.componentInstance.count()).toBe(1);
  });

  it('should decrement', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.componentInstance.decrement();
    expect(fixture.componentInstance.count()).toBe(-1);
  });

  it('should reset to 0', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.componentInstance.increment();
    fixture.componentInstance.increment();
    fixture.componentInstance.reset();
    expect(fixture.componentInstance.count()).toBe(0);
  });

  it('should render the count in the template', async () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.componentInstance.increment();
    fixture.componentInstance.increment();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('2');
  });

  it('should increment when +1 button is clicked', async () => {
    const fixture = TestBed.createComponent(CounterComponent);
    await fixture.whenStable();
    const btn = fixture.nativeElement.querySelector('.btn-increment') as HTMLButtonElement;
    btn.click();
    expect(fixture.componentInstance.count()).toBe(1);
  });

  it('should decrement when -1 button is clicked', async () => {
    const fixture = TestBed.createComponent(CounterComponent);
    await fixture.whenStable();
    const btn = fixture.nativeElement.querySelector('.btn-decrement') as HTMLButtonElement;
    btn.click();
    expect(fixture.componentInstance.count()).toBe(-1);
  });
});
