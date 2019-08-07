import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';
import { AboutComponent } from './paginas/about/about.component';
import { ItemComponent } from './paginas/item/item.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';



const rutas: Routes =[
  {path: 'inicio', component: PortafolioComponent },
  {path: 'about', component: AboutComponent },
  {path: 'item/:idProducto', component: ItemComponent },
  {path: 'buscar/:termino', component: BuscarComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'inicio' }

];


@NgModule({
  imports: [RouterModule.forRoot(rutas, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
