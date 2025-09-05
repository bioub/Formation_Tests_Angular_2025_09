import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosListComponent } from './todos-list.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;
  let originalConsoleError!: any;

  beforeAll(() => {
    originalConsoleError = console.error;
    console.error = function (message?: any, ...optionalParams: any[]): void {
      const params = optionalParams ? `\nParams: ${optionalParams}` : '';
      fail(`Test contained console error:\n${message}${params}`);
    };
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosListComponent, TodoItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show items', () => {
    component.todos = [
      'Test Todo 1',
      'Test Todo 2',
    ];
    fixture.detectChanges();

    expect(fixture.nativeElement.innerText).toContain('Test Todo 1');
    expect(fixture.nativeElement.innerText).toContain('Test Todo 2');
  });
});
