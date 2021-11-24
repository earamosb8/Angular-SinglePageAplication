import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

 
  constructor(private _heroesServices:HeroesService, private _router:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    
   let resultado = this._heroesServices.buscarHeroes(termino)

    console.log(resultado)

    this._router.navigate(["/busqueda",termino])
    
    }
  }


