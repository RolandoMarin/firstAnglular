import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoList',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.scss']
})
export class TodoListComponent implements OnInit {

  list:any[]=[
  { id: 0,todo:"First Item"},
  { id: 1,todo:"Second Item"},
  { id: 2,todo:"Third Item"},
  { id: 3,todo:"Fourth Item"},
  { id: 4,todo:"Fifth Item"},

  ];

  constructor() { }

  ngOnInit() {
  }
  onRemove(item:any){
    this.list = this.list.filter((element)=>{
       return element.id != item.id;
    })
  
  }

}
