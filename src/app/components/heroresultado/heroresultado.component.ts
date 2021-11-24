import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.services';

@Component({
  selector: 'app-heroresultado',
  templateUrl: './heroresultado.component.html',
  styleUrls: []
})
export class HeroresultadoComponent implements OnInit {
  heroes:any={};
  termino:any;

  constructor(private _heroeService:HeroesService, private _activatedRoute: ActivatedRoute) {
    
    }
   

  ngOnInit(): void {
      this._activatedRoute.params.subscribe(params =>{
      this.termino = params['texto'];
      this.heroes = this._heroeService.buscarHeroes(params['texto']) ;
  });

}}
