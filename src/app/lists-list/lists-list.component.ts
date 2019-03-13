import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lists-list',
  templateUrl: './lists-list.component.html',
  styleUrls: ['./lists-list.component.css']
})
export class ListsListComponent implements OnInit {

  inputValue = '';

  @Input() tasks: any;
  @Input() currentListId: number;
  @Output() addNewList = new EventEmitter();
  @Output() deleteList = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  addNewListLocal() {
    this.addNewList.emit(this.inputValue);
  }

  deleteListTransfer(index) {
    this.deleteList.emit(index);
  }
}
