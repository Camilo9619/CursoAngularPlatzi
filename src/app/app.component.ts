import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo='platzi-store'
  datos=['camilo','pablo','pedro'];
  productos : Product[] =[
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
    }
  ];
  agregarelemento(){
    this.datos.push('nuevo item');
  }
  quitarelemento(index:number){
    this.datos.splice(index,1);
  }
}
