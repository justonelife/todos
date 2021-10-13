import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoManagementComponent } from './todo-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    TodoManagementComponent,
    CreateTodoComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    TodoManagementComponent
  ]
})
export class TodoManagementModule { }
