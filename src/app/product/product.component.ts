import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  producto:Product={
      id: '1',
      imagen: 'assets/images/camiseta.png',
      titulo: 'Camiseta',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
