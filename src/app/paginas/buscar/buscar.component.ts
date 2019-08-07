import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor( private ruta: ActivatedRoute,
               public productosService: ProductosService ) { }

  ngOnInit() {
    this.ruta.params
     .subscribe( params => {
       console.log(params['termino']);
       this.productosService.buscarProducto(params['termino']);

    });
    
  }

}
