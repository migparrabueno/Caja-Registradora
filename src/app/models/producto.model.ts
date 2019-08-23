export class Producto{
    nombre: string;
    imagen: string;
    precio: string;

    constructor(pNombre: string, pImagen: string, pPrecio: string){
        this.nombre = pNombre;
        this.imagen = pImagen;
        this.precio = pPrecio;
    }
}