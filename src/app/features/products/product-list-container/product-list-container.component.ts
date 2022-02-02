import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {
  



@Output()
onItemAddedFromContainer:EventEmitter<Product>= new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }


  onItemAdded(product:Product){

    this.onItemAddedFromContainer.emit(product);

  }
}
