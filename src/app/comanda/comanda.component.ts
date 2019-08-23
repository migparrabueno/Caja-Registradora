import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {
  @Input() productosPedidos: Producto[];

  constructor() {
    this.productosPedidos=[];
   }

  ngOnInit() {
  }

  sumarPrecio(){
    let total =0;
    for(let producto of this.productosPedidos){ 
      total += Number(producto.precio);
    }
    return total;

  }

}
