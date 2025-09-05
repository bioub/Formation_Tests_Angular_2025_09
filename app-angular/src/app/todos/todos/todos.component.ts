import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todos = ['Item 1', 'Item 2', 'Item 3'];

  public handleNewTodo(todo) {
    this.todos = [todo, ...this.todos];
  }

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

}
