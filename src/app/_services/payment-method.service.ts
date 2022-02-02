import { Injectable } from '@angular/core';
import { PaymentType } from '../_models/payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
paymentMethods:PaymentType[]=[
{id:1,name:"visa"},
{id:2,name:"masterCard"},
{id:3,name:"amrican express"},
{id:4,name:"paypal"},
{id:5,name:"cash"},


]

getAllPaymentMehods():PaymentType[]{
return this.paymentMethods.splice(0)

}

  constructor() { }
}
