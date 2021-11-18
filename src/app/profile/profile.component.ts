import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileName = "";

  currentId: number = -1;
  currentProfile: any = null;

  fakeDB : any [] = [
    {
    name: "Rolando",
    age : 19,
    favoriteGame: "COD"
    },
    {
    name: "Elaina",
    age : 19,
    favoriteGame: "Sims"
    },
    {
      name: "Tom",
      age : 29,
      favoriteGame: "Halo"
      }, 
      {
        name: "kelly",
        age : 21,
        favoriteGame: "Animal Crossing"
        }
  ]
  constructor(private router: ActivatedRoute,private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe(params =>{
      this.currentId = params["id"];
      if(this.fakeDB.length -1<this.currentId || this.currentId<0){
        console.log("Item is out of bounds");
        //reroute
        return;
      }

      this.currentProfile = this.fakeDB[this.currentId];
    });


  }
  goHome(){
    this.route.navigate(["home"]);
  }

}
