import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodosListComponent } from '../todos-list/todos-list.component';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
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
      imports: [FormsModule],
      declarations: [TodosComponent, TodoFormComponent, TodosListComponent, TodoItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
