import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoManagementComponent } from './todo-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { UserButtonComponent } from '../user-button/user-button.component';
import { UserButtonModule } from '../user-button/user-button.module';



@NgModule({
  declarations: [
    TodoManagementComponent,
    CreateTodoComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DirectivesModule,
    UserButtonModule
  ],
  exports: [
    TodoManagementComponent
  ]
})
export class TodoManagementModule { }
