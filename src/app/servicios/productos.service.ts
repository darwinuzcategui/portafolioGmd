import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosInterface } from '../interfaces/productosInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductosInterface[] = [];

  constructor( private http: HttpClient) {

    this.cargarProductos();
   }
   private cargarProductos() {
    this.http.get('https://darwinapp-106f8.firebaseio.com/productos_idx.json')
    .subscribe( (resp: ProductosInterface[]) => {
      console.log(resp);
      this.cargando = false;
      this.productos = resp;

    });

   }


}


