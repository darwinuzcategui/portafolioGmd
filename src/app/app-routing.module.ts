import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';
import { AboutComponent } from './paginas/about/about.component';
import { ItemComponent } from './paginas/item/item.component';



const rutas: Routes =[
  {path: 'inicio', component: PortafolioComponent },
  {path: 'about', component: AboutComponent },
  {path: 'item', component: ItemComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'inicio' }

];


@NgModule({
  imports: [RouterModule.forRoot(rutas, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
