import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';
import { ProductosDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductosDescripcion ;
  id: string;


  constructor( private route: ActivatedRoute,
               public productoService: ProductosService ) { }

  ngOnInit() {

    this.route.params
        .subscribe( parametros => {
          // console.log(parametros['idProducto']);
          this.productoService.getProducto(parametros['idProducto'])
                .subscribe( (producto: ProductoDescripcion) => {
                  this.id = parametros['idProducto'];
                  this.producto = producto;
                });
        });


  }

}
