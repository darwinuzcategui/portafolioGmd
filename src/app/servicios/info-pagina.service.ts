import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPaginaInterface } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPaginaInterface = {};
  caragada = false;

  constructor( private http: HttpClient ) {

    console.log('servicio info Pagina Cargado..');

    // leer el jason
    this.http.get('assets/datos/datos-pagina.json')
    // src\assets\datos\datos-pagina.json
    .subscribe( (resp: InfoPaginaInterface) => {

      this.caragada = true;
      this.info = resp;
      console.log(resp);
      // console.log(resp['facebook']);

    });


   }
}
