import { Component, OnInit } from '@angular/core';

//importo el servicio y la interfaz de heroes  donde lo requiera
import { HeroesService,Heroe } from 'src/app/servicios/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  //definimos nuestro array tipo hero para que se acople a todas las propiedad que creamos
  //en la interfaz heroes en nuestro heroes.services.ts
  heroes:Heroe [] = [];
  constructor(private _heroesService:HeroesService, private router:Router) {
      //tener en cuenta que el constructor se ejecua primero que el ngoninit()
  }
 //ngOnInit(): se ejecuta apenas el componente se renderiza
  ngOnInit(): void {
    //aqui haremos referencia al arreglo vacio heroes y al objeto instanaciso  en la variable _heroesServices
    this.heroes = this._heroesService.getHeroes()
    console.log(this.heroes)
  }
  verheroe(idx:number){
    console.log(idx)
    this.router.navigate(["/heroe",idx])
  }

}
