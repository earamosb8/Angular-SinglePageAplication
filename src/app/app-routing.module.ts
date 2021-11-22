import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
//rutas : la ruta del asterisco es para redoreccionar en caso tal no se encuentre la ruta
//entre las definidas en este arreglo
const ROUTES: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'**',pathMatch :'full', redirectTo: 'home'},

];


export const APP_ROUTING = RouterModule.forRoot(ROUTES)
