import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  public todoForm: any;

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
      description: ['']
    });
  }

  onCreateTodoClick(): void {
    let body = this.todoForm.value;
    this.todoService.createTodo(body).pipe(
      switchMap(() => this.todoService.getTodos())
    ).subscribe(console.log)
  }

}
