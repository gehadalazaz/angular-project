import { Category } from "./category.model";
import { PaymentType } from "./payment-type.model";
import { productlang } from "./product-lang.model";
import { Tag } from "./tags.model";

export interface Product {
    _id?:number,
   data:productlang[],
    price:number,
    discount?:number,
    imagesUrls:string[],
    quantity:number,
    category:Category,
    paymentTypes:PaymentType[],
    tags:Tag[]
}