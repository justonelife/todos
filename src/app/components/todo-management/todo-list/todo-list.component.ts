import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos?: Todo[];
  @Input() title: String = '';

  constructor() { }

  ngOnInit(): void {}

}
