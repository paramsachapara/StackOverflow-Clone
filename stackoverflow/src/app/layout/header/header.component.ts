import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  loggedIn:boolean =false
  username:any;
  constructor(private router:Router){}
  ngOnInit() {
    if(localStorage.getItem("token")){
      this.loggedIn=true
      this.username=localStorage.getItem("username")
    }

  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.router.navigate(['home']);
  }

}
