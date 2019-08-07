import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosInterface } from '../interfaces/productosInterface';
import { resolve } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductosInterface[] = [];
  productoFiltrados: ProductosInterface[] = [];

  constructor( private http: HttpClient) {

    this.cargarProductos();
   }
   private cargarProductos() {

    // Retonar  hasta que se utilice
    return new Promise( (resolve, reject ) => {

      this.http.get('https://darwinapp-106f8.firebaseio.com/productos_idx.json')
    .subscribe( (resp: ProductosInterface[]) => {
      this.cargando = false;
      this.productos = resp;
      resolve();

    });

    });

   }

   getProducto( id: string ) {
       return   this.http.get(`https://darwinapp-106f8.firebaseio.com/productos/${id}.json`)
   }

   buscarProducto( termino: string ) {


    if ( this.productos.length === 0 ) {
      // cargar productos
      this.cargarProductos().then( () => {
        // ejecutar después de tener los productos
        // Aplicar filtro
        this.filtrarProductos( termino );
      });

    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }


  }

  private filtrarProductos( termino: string ) {

    // console.log(this.productos);
    this.productoFiltrados = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
        this.productoFiltrados.push( prod );
      }

    });


  }

}
