import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  loginUserData = {}
 constructor(private _auth: AuthService){}
  ngOnInit(){

  }
 loginUser(){
   this._auth.loginUser(this.loginUserData ).subscribe(
     res => {console.log(res.body.token);
  this._auth.saveToken(res.body.token);
    }
     ,err =>{console.log(err)}
   )
 }
}
