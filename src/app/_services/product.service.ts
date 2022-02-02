import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core"; 
import { Event } from "@angular/router";

import { options } from "joi";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../_models/product.model";
@Injectable({providedIn:'root'})
export class ProductService{

    itemAdded:EventEmitter<Product>=new EventEmitter<Product>();
    itemDeleted:EventEmitter<Product>=new EventEmitter<Product>();
    constructor(private httpClient:HttpClient){
    }

   

    cartArray:Product[]=[];

getAllProducts():Observable<{product:Product[],numberOfProducts:number}>{
    const token:string=localStorage.getItem('token')!;
    const headers= new HttpHeaders({
        authorization:token
    });
 return  this.httpClient.get<{product:Product[],numberOfProducts:number}>(`${environment.baseUrl}product`,{headers});
}

getProductById(id:string):Observable<Product>{

    return this.httpClient.get<Product>(environment.baseUrl+'product/'+id)
}

}
