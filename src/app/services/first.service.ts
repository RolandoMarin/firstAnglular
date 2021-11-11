import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { chatMessage } from '../models/chats';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  public ob$ : Observable<number> = interval(5000);

  public data : chatMessage[] = [];

  constructor() { 
  
  this.ob$.subscribe(digit =>{
    console.log("i have recieved from observable",digit);  

      this.data.push({
        name: "data"+ digit, 
        message:"toast"+ digit,
        author: "Rolando",
        created_on:new Date,
        updated_on:new Date,
        channel:"news"
      });
  });
}
  
      public getMessage(): Observable<chatMessage[]> {
        console.log("i am subscribing to the getMessage",this.data);
        return of(this.data);
        } 
  }