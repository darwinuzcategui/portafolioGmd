import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../servicios/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(public _infoServicio: InfoPaginaService) { }

  ngOnInit() {
  }

}
