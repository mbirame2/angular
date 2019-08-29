import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Policy } from './policy';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private headers= new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  private token=localStorage.getItem('token');
  jwt:string;
  username:string;
  roles:string;
  constructor(private httpClient: HttpClient) { }
  PHP_API_SERVER = "http://127.0.0.1:8000/api/login";

  
  loginUser(user){
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}`, user,{observe:'response'});
  }
  envoiArgent(user){
    return this.httpClient.post<any>("http://127.0.0.1:8000/api/envoieargent", user,{headers:this.headers,observe:'response'});
  }
  retirerArgent():Observable<any>{
    return this.httpClient.get("http://127.0.0.1:8000/api/liste_user" ,{headers:this.headers,observe:'response'});
  }
  loginPartenaire(user){
    return this.httpClient.post<any>("http://127.0.0.1:8000/api/ajout_partenaire", user,{observe:'response'});
  }
  loginUtilisateur(user){
    return this.httpClient.post<any>("http://127.0.0.1:8000/api/register/userpartenaire" , user,{headers:this.headers,observe:'response'});
  }
  listeUtilisateur():Observable<any>{
    return this.httpClient.get("http://127.0.0.1:8000/api/liste_user" ,{headers:this.headers,observe:'response'});
  }
testretrait(user){
  return this.httpClient.post<any>("http://127.0.0.1:8000/api/retrait_test", user,{headers:this.headers,observe:'response'});
}
finaliser(user){
  return this.httpClient.post<any>("http://127.0.0.1:8000/api/retraitargent", user,{headers:this.headers,observe:'response'});

}
  saveToken(jwt: string){

  localStorage.setItem('token' ,jwt)
  this.jwt=jwt;
  this.parseJWT();
  }
  parseJWT(){
let jwtHelpe = new JwtHelperService();
let jwtObject=jwtHelpe.decodeToken(this.jwt);
this.username=jwtObject.sub;
this.roles=jwtObject.roles[0];
console.log(this.isAuthenticated());

  }
  deletetoken(){
    localStorage.removeItem('token');
  }

  isAuthenticated(){
   
    return this.roles;
  }
  tokendougna(){
    return this.token;
  }
}
