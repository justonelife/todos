import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-todo-management',
  templateUrl: './todo-management.component.html',
  styleUrls: ['./todo-management.component.scss']
})
export class TodoManagementComponent implements OnInit {

  public definedTodos: Todo[] = [];
  public inProgressTodos: Todo[] = [];
  public completedTodos: Todo[] = [];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(res => this.classifyTodos(res));
  }

  updateTodoList(event: Todo[]): void {
    this.classifyTodos(event);
  }

  classifyTodos(todos: Todo[]): void {
    this.emptyTodoArrays();
    for (let todo of todos) {
      if (todo.status === 'defined') this.definedTodos.push(todo);
      else if (todo.status === 'in_progress') this.inProgressTodos.push(todo);
      else this.completedTodos.push(todo);
    }
  }

  emptyTodoArrays(): void {
    this.definedTodos.splice(0, this.definedTodos.length);
    this.inProgressTodos.splice(0, this.inProgressTodos.length);
    this.completedTodos.splice(0, this.completedTodos.length);
  }

}
