import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // sert au maj de prop type component.count = 4;
    fixture.autoDetectChanges(); // ne sert que pour les (click), (submit), ...
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the count', () => {
    component.count = 5;
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText).toContain('5');
  });

  it('should increment the count on increment call', () => {
    component.count = 5;
    fixture.detectChanges();
    
    component.increment();
    fixture.detectChanges();
    
    expect(fixture.nativeElement.innerText).toContain('6');
  });

  it('should increment the count on increment call', () => {
    const spy = jasmine.createSpy('countChange');
    component.count = 5;

    component.countChange.subscribe(spy);

    component.increment();

    expect(spy).toHaveBeenCalledWith(6);
  });

  it('should increment the count on button click', () => {
    const spy = jasmine.createSpy('countChange');
    component.count = 5;
    fixture.detectChanges();
    
    const button = fixture.nativeElement.querySelector('button');
    expect(button.innerText).toBe('5');

    component.countChange.subscribe(spy);
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    
    expect(button.innerText).toBe('6');

    expect(spy).toHaveBeenCalledWith(6);
  });
});
