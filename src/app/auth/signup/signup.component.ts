import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loginUserData = {}
  constructor(private _auth: AuthService){}
   ngOnInit(){
 
   }
  loginUser(){
    this._auth.loginUtilisateur(this.loginUserData ).subscribe(
      res => {console.log(res); }
      ,err =>{console.log(err)}
    )
  }

}
