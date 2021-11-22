import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todoItem',
  templateUrl: './todoItem.component.html',
  styleUrls: ['./todoItem.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item:any;
  @Output() removeEvent =new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  removeMe(value:any){
    console.log("remove", this.item);
    this.removeEvent.emit(value);
  }

}
