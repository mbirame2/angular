import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-retraitargent',
  templateUrl: './retraitargent.component.html',
  styleUrls: ['./retraitargent.component.css']
})
export class RetraitargentComponent implements OnInit {

  public nomcompletreceveur;
  private INE;
  public code;

  loginUserData = {}
  constructor(private _auth: AuthService){}
   ngOnInit(){
 
   }
   nomcomplet(){
     return this.nomcompletreceveur;
   }
  loginUser(){
    this._auth.testretrait(this.loginUserData ).subscribe(
      res => {console.log(res);
            this.nomcompletreceveur=res.body.nomcompletReceveur;
            this.INE=res.body.pieceidReceveur;
            this.code=this.loginUserData
     }
      ,err =>{console.log(err)}
    )
  }

  finalisons(){
    this._auth.finaliser(this.code ).subscribe(
      res => {console.log(res);

     }
      ,err =>{console.log(err)}
    )
  }
}
