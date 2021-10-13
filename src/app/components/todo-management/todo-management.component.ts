import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-todo-management',
  templateUrl: './todo-management.component.html',
  styleUrls: ['./todo-management.component.scss']
})
export class TodoManagementComponent implements OnInit {

  public todos: Todo[] = [];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(res => this.todos = res);
  }

  updateTodoList(event: Todo[]): void {
    this.todos = event;
  }

}
