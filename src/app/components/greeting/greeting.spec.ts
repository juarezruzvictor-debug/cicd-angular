import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { GreetingComponent } from './greeting';

// Host component to test input binding
@Component({
  standalone: true,
  imports: [GreetingComponent],
  template: `<app-greeting [name]="testName" />`,
})
class HostComponent {
  testName = '';
}

describe('GreetingComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingComponent, HostComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(GreetingComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show default greeting when no name', async () => {
    const fixture = TestBed.createComponent(GreetingComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.message')?.textContent).toContain('visitante');
  });

  it('should show personalized greeting when name is given', async () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.componentInstance.testName = 'Carlos';
    fixture.detectChanges();
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.message')?.textContent).toContain('Carlos');
  });

  it('should contain "CI/CD Angular" in the greeting', async () => {
    const fixture = TestBed.createComponent(GreetingComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.message')?.textContent).toContain('CI/CD Angular');
  });
});
