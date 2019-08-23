import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto [];
  @Output() onProdSeleccionado: EventEmitter<Producto>;

  constructor() {
    this.titulo = "";
    this.productos = [];
    this.onProdSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  mandarDatos(pProducto){
    this.onProdSeleccionado.emit(pProducto);
  }

}
