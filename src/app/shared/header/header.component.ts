import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../servicios/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor( public _servicio: InfoPaginaService,
               private router: Router) { }

  ngOnInit() {
  }

  // metodos buscar productos

  buscarProducto( termino: string ) {
    if (termino.length < 1 ) {
      return;
    }
    this.router.navigate(['/buscar',termino]);
    console.log(termino);
  }

}
