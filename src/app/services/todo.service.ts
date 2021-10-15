import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  //TRICK ---- LEARN TO REPLACE
  //notify to re-fetch todos
  private fetchTodo = new BehaviorSubject(false);
  currentFetchTodo = this.fetchTodo.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }

  getTodos(status?: string): Observable<Todo[]> {

    const url = status 
      ? `${environment.api}/todos?status=${status}`
      : `${environment.api}/todos`;
      
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

  changeTodoStatus(data: { id: string, status: string}): Observable<any> {
    const url = `${environment.api}/todo/status`;
    return this.httpClient
      .put(url, data, this.headerOptions)
      .pipe();
  }

  toggleFetchTodo(): void {
    let value = this.fetchTodo.value;
    this.fetchTodo.next(!value);
  }
}
