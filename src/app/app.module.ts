import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { TodoListComponent } from './todoList/todoList.component';
import { TodoItemComponent } from './todoItem/todoItem.component';

@NgModule({
  declarations: [							
    AppComponent,
      NavbarComponent,
      SidebarComponent,
      MainComponent,
      AboutComponent,
      ProfileComponent,
      PageNotfoundComponent,
      TodoListComponent,
      TodoItemComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
