import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../components/todo-management/models/todo.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private headerOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
    const url = `${environment.api}/todos`;
    return this.httpClient
      .get<Todo[]>(url, this.headerOptions)
      .pipe(
        map(data => {
          return data.map((item: any) => new Todo(item));
        })
      );
  }

  createTodo(data: Todo): Observable<Todo> {
    const url = `${environment.api}/add`;
    return this.httpClient
      .post<Todo>(url, data, this.headerOptions)
      .pipe(
        map((res: any) => new Todo(res))
      );
  }
}
