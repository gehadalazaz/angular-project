import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.scss']
})
export class ProductDetalisComponent implements OnInit {
product!:Product;
relatedProductsArray!:Product[];

productItem!:Product;
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    // const id=this.activatedRoute.snapshot.params['productId'];
    this.activatedRoute.params.subscribe(


      (params)=>{

        const id=params['productId'];
        if (id) {
          this.getProductById(id);
          this.getAllProducts();
        }
  
      }
     
   

    )
    
  }
getProductById(id:string){

 this.productService.getProductById(id).subscribe(
(res)=>{
this.product=res;

},
(err)=>{},
()=>{}

)}
getAllProducts(){
  this.productService.getAllProducts().subscribe(
    (res)=>{
    this.relatedProductsArray=res.product.splice(0,6)
    
    },
    (err)=>{},
    ()=>{}

  )}

  onAddToCartPressed() {

    this.productService.itemAdded.emit(this.productItem);
    
  }


}
