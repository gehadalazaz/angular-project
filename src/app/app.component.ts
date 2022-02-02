import { Component } from '@angular/core';
import { Product } from './_models/product.model';



interface Cart{

  producstArray:{
  product:Product;
  quantity:number;
  }[]; 
  totalnumberofelements:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_day2';
// member variable
addedProducts!:Cart;


//   onItemAdded(product:Product){

// // if (this.addedProducts.producstArray.includes(product)) 
// //     product.quantity+=1
    
// // else
// // this.addedProducts.producstArray.push(product);
// }

// itemIsDeleted(product:Product){
  
// var x =this.addedProducts.producstArray.indexOf(product);
// this.addedProducts.producstArray.splice(x,1);


// }

}


