import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo.model';
import { faEraser,
  faEdit, 
  faCheck,
  faTimes,
  faCaretRight,
  faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo?: Todo;
  public isShowDetail: Boolean = false;
  private todoStatusLifeCycle: string[] = ['defined', 'in_progress', 'completed'];
  
  public faEraser = faEraser;
  public faEdit = faEdit;
  public faCheck = faCheck;
  public faTimes = faTimes;
  public faCaretRight = faCaretRight;
  public faCaretLeft = faCaretLeft;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  toggleDetail(): void {
    this.isShowDetail = !this.isShowDetail;
  }

  onDemoteClick(e: Event): void {
    e.stopPropagation();
    if (this.todo) {
      let status = this.getTodoPreviousState(this.todo.status);
      let id = this.todo.id || ''; // by pass model,  sure always have id
      this.todoService.changeTodoStatus({ id, status }).subscribe(
        () => this.todoService.toggleFetchTodo()
      );
    }
  }

  onDeleteClick(e: Event): void {
    e.stopPropagation();
  }

  onEditClick(e: Event): void {
    e.stopPropagation();
  }

  onPromoteClick(e: Event): void {
    e.stopPropagation();
    if (this.todo) {
      let status = this.getTodoNextState(this.todo.status);
      let id = this.todo.id || ''; // by pass model,  sure always have id
      this.todoService.changeTodoStatus({ id, status }).subscribe(
        () => this.todoService.toggleFetchTodo()
      );
    }
  }

  getTodoNextState(status: string): string {
    let statusIndex = this.todoStatusLifeCycle.indexOf(status);
    return this.todoStatusLifeCycle[statusIndex + 1];
  }

  getTodoPreviousState(status: string): string {
    let statusIndex = this.todoStatusLifeCycle.indexOf(status);
    return this.todoStatusLifeCycle[statusIndex - 1];
  }

}
