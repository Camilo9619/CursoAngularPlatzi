import { Component,
  Input, 
  OnInit,
  Output,
  EventEmitter,
  SimpleChange} from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  today=new Date();
  constructor(){
    console.log('1. constructor');
  }
  ngOnChanges(changes:SimpleChange){
    console.log('2. ngOnChanges');
    console.log(changes);
  }
  ngOnInit(){
    console.log('3. ngOnInit')
  }
  ngDoCheck(){
    console.log('4- ngDoCheck')
  }
  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
  ngOnDestroy(){
    console.log('5- ngOnDestroy');
  }
  
}
