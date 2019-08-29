import { Component } from '@angular/core';
import { AuthService } from './services/auth.service'
import { Policy } from './services/policy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _authserv: AuthService){
  }
  
  isAuthenticated(){
  
      return this._authserv.isAuthenticated();
 
  }
 tok(){
   return this._authserv.tokendougna();
 }
  remove(){
    this._authserv.deletetoken();
    console.log( this._authserv.tokendougna());
  }
}
