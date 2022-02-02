import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetalisComponent } from './features/products/product-detalis/product-detalis.component';
import { ProductListContainerComponent } from './features/products/product-list-container/product-list-container.component';
import{NotFoundComponent}from'./features/products/not-found/not-found.component'
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductAddComponent } from './features/products/product-add/product-add.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
const routes: Routes = [
  {path:'home',component:ProductListContainerComponent},
 
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:'product',children:[
    {path:'details/:productId',component:ProductDetalisComponent},
    {path:"add",component:ProductAddComponent}
  ]},
  {path:"product-list",component:ProductListComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
