import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-envoi-argent',
  templateUrl: './envoi-argent.component.html',
  styleUrls: ['./envoi-argent.component.css']
})
export class EnvoiArgentComponent implements OnInit {

  
  loginUserData = {}
 constructor(private _auth: AuthService){}
  ngOnInit(){

  }
 loginUser(){
   this._auth.envoiArgent(this.loginUserData ).subscribe(
     res => {console.log(res);
           
    }
     ,err =>{console.log(err)}
   )
 }
}
