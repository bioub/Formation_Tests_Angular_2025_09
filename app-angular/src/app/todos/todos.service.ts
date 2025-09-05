import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private httpClient = inject(HttpClient);

  // constructor(private httpClient: HttpClient) { }

  getTodos() {
    return this.httpClient.get<{ title: string }[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      map(todos => todos.map(todo => todo.title).slice(0, 5)),
    );
  }
}
