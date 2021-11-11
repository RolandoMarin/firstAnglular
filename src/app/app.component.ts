import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { chatMessage } from './models/chats';
import { FirstService } from './services/first.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
isLoaded:boolean =false;

 data: chatMessage[] = [];

constructor(public service: FirstService) {}

ngOnInit(): void {
  this.service.getMessage().subscribe((data)=> {
    this.data = data;
  });
  }

  toggleLoaded(){
    this.isLoaded = !this.isLoaded;
    
  }

}
