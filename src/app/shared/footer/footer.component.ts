import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../servicios/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  agno: number = new  Date().getFullYear();

  // tslint:disable-next-line: variable-name
  constructor( public _serviciof: InfoPaginaService) { }

  ngOnInit() {
  }

}
