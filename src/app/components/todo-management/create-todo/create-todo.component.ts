import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { switchMap } from 'rxjs/operators';
import { Todo } from '../models/todo.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  @Output() newTodoEvent = new EventEmitter<Todo[]>();
  public todoForm: any;
  public faPlus = faPlus;
  public isShowPanel: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      completed: [false]
    });
  }

  onCreateTodoClick(): void {
    let body = this.todoForm.value;
    this.todoService.createTodo(body).pipe(
      switchMap(() => this.todoService.getTodos())
    ).subscribe(
      res => this.newTodo(res)
    );
  }

  newTodo(data: Todo[]): void {
    this.newTodoEvent.emit(data);
  }

  onCancelClick(): void {
    this.hidePanel();
    this.clearForm();
  }

  clearForm(): void {
    this.todoForm.reset();
  }

  showPanel(): void{
    this.isShowPanel = true;
  }

  hidePanel(): void {
    this.isShowPanel = false;
  }

}
