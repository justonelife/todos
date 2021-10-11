import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoManagementComponent } from './todo-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTodoComponent } from './create-todo/create-todo.component';



@NgModule({
  declarations: [
    TodoManagementComponent,
    CreateTodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoManagementComponent
  ]
})
export class TodoManagementModule { }
