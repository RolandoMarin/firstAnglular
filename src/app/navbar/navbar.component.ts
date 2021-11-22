import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
urls: any[] = [
  {route: "", name: "home"},
  {route: "about", name: "about"},
  {route: "/todo", name: "Todo List"},
  {route:"/profile/0",name:"Rolando"},
  {route: "/profile/1", name: "Elaina"}
];

  constructor() { }

  ngOnInit() {
  }
  functioname(item:string){
    console.log(item, "was clicked");
  }

}
