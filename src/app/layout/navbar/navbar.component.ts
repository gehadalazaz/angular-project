import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})




export class NavbarComponent implements OnInit {
  @Input()
  theAddedProducts:Product[]=[];
  @Input()
  productItem!:Product;
  
  cartIsOpen=false;

constructor(private productService:ProductService){}


  
  
  ngOnInit(): void {
    // this.theAddedProducts=this.productService.cartArray
    this.productService.itemDeleted.subscribe(

(next)=>{

this.theAddedProducts.splice(this.theAddedProducts.indexOf(next),1);

}
,
(error)=>{

  console.log("ERROR")
  
}

)


this.productService.itemAdded.subscribe(

  (next)=>{
  
  
  if (this.theAddedProducts.includes(next)) 
      next.quantity+=1
      
  else
  this.theAddedProducts.push(next);
  
  }
  ,
  (error)=>{
  
    console.log("ERROR")
    
  }
  
  
  )


}



  ngAfterViewInit() {

  }


onDeletedItemPressed(product:Product)
{
this.productService.itemDeleted.emit(this.productItem);
}


}
