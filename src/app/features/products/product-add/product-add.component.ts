import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { throttleTime } from 'rxjs';
import { Category } from 'src/app/_models/category.model';
import { PaymentType } from 'src/app/_models/payment-type.model';
import { Product } from 'src/app/_models/product.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentMethodService } from 'src/app/_services/payment-method.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  product= {} as Product;
  paymentTypes!:PaymentType[];
categories!:Category[];
  constructor(private categotyService:CategoryService,private paymentMethodService:PaymentMethodService,private router:Router) { }

  ngOnInit(): void {
this.categories=this.getAllCategories();
this.product= {_id:1,data:[{id:1,name:"product 1",description:"product 1 description ",lang:{id:1,name:"English"}}],price:100,category:{id:1,name:"category 1"},discount:10,imagesUrls:['https://picsum.photos/200/100'],quantity:1,paymentTypes:[{id:1,name:"visa"}],tags:[{id:1,name:"tag 1"},{id:2,name:"tag 2"}]}
this.paymentTypes=this.getAllPaymentTypes();  

}
  
  getAllCategories():Category[]{
    return this.categotyService.getAllCategories()
  }

onFormSubmit(form:NgForm):void{
  this.router.navigate(['/producr','/details','6010736031e4fe0015d3b970'])

console.log(
form.value
);


}

getAllPaymentTypes():PaymentType[]{
return this.paymentMethodService.getAllPaymentMehods();

}


onCheckBoxChanged(i:number){
return this.paymentTypes[i];

}

}
