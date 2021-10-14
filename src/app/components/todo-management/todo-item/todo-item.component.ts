import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo.model';
import { faEraser, 
  faCheck,
  faTimes,
  faCaretRight,
  faCaretLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo?: Todo;
  public isShowDetail: Boolean = false;
  
  public faEraser = faEraser;
  public faCheck = faCheck;
  public faTimes = faTimes;
  public faCaretRight = faCaretRight;
  public faCaretLeft = faCaretLeft;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetail(): void {
    this.isShowDetail = !this.isShowDetail;
  }

  onDemoteClick(e: Event): void {
    e.stopPropagation();
  }

  onDeleteClick(e: Event): void {
    e.stopPropagation();
  }

  onPromoteClick(e: Event): void {
    e.stopPropagation();
  }

}
