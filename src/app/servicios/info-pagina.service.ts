import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPaginaInterface } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPaginaInterface = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

   }

private cargarInfo() {
    // leer el jason
    this.http.get('assets/datos/datos-pagina.json')
    // src\assets\datos\datos-pagina.json
    .subscribe( (resp: InfoPaginaInterface) => {

      this.cargada = true;
      this.info = resp;
    });

  }

  private cargarEquipo() {

    // leer el jason desde Firebase
    this.http.get('https://darwinapp-106f8.firebaseio.com/equipo.json')
    // desde Firebase con la ruta
    .subscribe( (resp: any[]) => {
      this.equipo = resp;
    });
  }


}
