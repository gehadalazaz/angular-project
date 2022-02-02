import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_models/product.model';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

productsArray!:Product[];
productArray$!:Observable<{product:Product[],numberOfProducts:number}>;
@Output()
itemAddedFromProductListCompenent:EventEmitter<Product>= new EventEmitter<Product>();



constructor(private productService:ProductService,private authService:AuthService){}


getAllProducts(){
  this.productService.getAllProducts().subscribe(
  (res)=>{
    this.productsArray=res.product
  },
  (err)=>{
    console.log(err)
  },
  ()=>{}
  )
  const user= 
  {
  email:"testggg@example.com" ,
  
  password: "123456789"
  }


this.authService.login(user).subscribe(

(res)=>{
  localStorage.setItem('token',res.token)
}


)





}
 

  ngOnInit(): void {
    // this.getAllProducts();
    this.productArray$= this.productService.getAllProducts();
  }


 
  
  // onItemAdded(product:Product){

  //   this.itemAddedFromProductListCompenent.emit(product);
    
  // }


}
