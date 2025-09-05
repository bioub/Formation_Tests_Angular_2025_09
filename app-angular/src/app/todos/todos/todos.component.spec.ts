import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodosListComponent } from '../todos-list/todos-list.component';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosService } from '../todos.service';
import { of } from 'rxjs';
import { Mock } from 'protractor/built/driverProviders';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [TodosComponent, TodoFormComponent, TodosListComponent, TodoItemComponent]
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

  it('should show data from httpClient', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    fixture.detectChanges();
    expect(fixture.nativeElement.innerText).toContain('delectus aut autem');
  });

  it('should show data from httpClient with spyOn', async () => {
    const todos = [
      'Test Todo 1',
      'Test Todo 2',
    ];

    const service = TestBed.inject(TodosService);
    spyOn(service, 'getTodos').and.returnValue(of(todos));

    fixture.detectChanges();

    expect(fixture.nativeElement.innerText).toContain('Test Todo 1');
    expect(fixture.nativeElement.innerText).toContain('Test Todo 2');
    expect(service.getTodos).toHaveBeenCalledTimes(1);
  });

});



describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: TodosService,
          // useFactory: () => {
          //   return new MockTodosService(['Test Todo 1', 'Test Todo 2']);
          // },
          useValue: {
            getTodos: () => of([
              'Test Todo 1',
              'Test Todo 2',
            ])
          }
        }
      ],
      imports: [FormsModule, HttpClientModule],
      declarations: [TodosComponent, TodoFormComponent, TodosListComponent, TodoItemComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should show data from httpClient with configureTestingModule', async () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.innerText).toContain('Test Todo 1');
    expect(fixture.nativeElement.innerText).toContain('Test Todo 2');
  });

});


describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [TodosComponent, TodoFormComponent, TodosListComponent, TodoItemComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should show data from httpClient with HttpClientTestingModule', async () => {
    const httpTestingController = TestBed.inject(HttpTestingController);

    fixture.detectChanges();    

    httpTestingController.expectOne('https://jsonplaceholder.typicode.com/todos').flush([
      { id: 1, title: 'Test Todo 1' },
      { id: 2, title: 'Test Todo 2' },
    ]);

    fixture.detectChanges();

    expect(fixture.nativeElement.innerText).toContain('Test Todo 1');
    expect(fixture.nativeElement.innerText).toContain('Test Todo 2');
  });

});
