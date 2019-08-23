import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrProdsComida: Producto[];
  arrProdsBebida: Producto[];
  arrProductosSeleccionados: Producto[];
  jsonProdCantidad: [{}];

  constructor(){
    this.arrProductosSeleccionados=[];
    this.arrProdsComida = [
      new Producto('Cocido', 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/cocido-madrileno-1080x671.jpg', '3.59'),
      new Producto('Paella', 'https://www.hola.com/imagenes/cocina/recetas/20180719127368/paella-valenciana-caracoles/0-586-282/paella-valenciana-a.jpg', '15'),
      new Producto('Salmorejo', 'https://www.divinacocina.es/wp-content/uploads/salmorejo-de-manzana-tapa.jpg', '5'),
      new Producto('Bravas', 'https://i2.wp.com/valenciaculture.com/wp-content/uploads/2018/05/patatas-bravas.jpg?fit=600%2C337&ssl=1', '3.5')
    ]

    this.arrProdsBebida = [
      new Producto('Refresco', 'https://www.sandwichesolmedo.com/90-large_default/refresco.jpg', '1.50'),
      new Producto('Caña', 'https://cdn.20m.es/img2/recortes/2017/07/27/517358-600-338.jpg?v=20170727182841', '1.30'),
      new Producto('Vino', 'http://mahurosas.com/wp-content/uploads/2018/09/vino-sin-alcohol-la-apuesta-mas-arriesgada.jpg', '1.4'),
      new Producto('Copa', 'https://yourspanishcorner.com/1244-thickbox_default/whisky-dyc.jpg', '4.50')
    ]
    
    this.jsonProdCantidad= [
      {
        cantidad: "",
        producto:""
      }
    ];
  }

  onProductoSeleccionado($event){
    this.arrProductosSeleccionados.push($event);
    
    //console.log(this.arrProductosSeleccionados);
  }
}
