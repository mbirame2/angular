import { user } from './../../user';
import { Component, OnInit , ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { observable } from 'rxjs';
@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {

  constructor(private _auth: AuthService ){}  
  user:user[];
  ngOnInit() {
    this._auth.listeUtilisateur()
    .subscribe(
      res=>
      {this.user = res.body} ,
      error => console.log(error.body)
      )
  }

  

 }


