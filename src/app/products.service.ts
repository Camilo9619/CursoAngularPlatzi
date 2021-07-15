import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Product } from './product.model'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      imagen: 'assets/images/camiseta.png',
      titulo: 'Camiseta',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
    },
    {
      id: '2',
      imagen: 'assets/images/hoodie.png',
      titulo: 'Hoodie',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
    },
    {
      id: '3',
      imagen: 'assets/images/mug.png',
      titulo: 'Mug',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
    },
    {
      id: '4',
      imagen: 'assets/images/pin.png',
      titulo: 'Pin',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
    },
    {
      id: '5',
      imagen: 'assets/images/stickers1.png',
      titulo: 'Stickers',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
    },
    {
      id: '6',
      imagen: 'assets/images/stickers2.png',
      titulo: 'Stickers',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
    },
  ];
  constructor() { }
  obtenerdatos(){
    return this.products;
  }
  obtenerdato(id:string){
    return this.products.find(item=>id===item.id);
  }
}
