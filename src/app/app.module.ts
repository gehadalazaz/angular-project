import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './layout/topnavbar/topnavbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductItemComponent } from './features/products/product-item/product-item.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductListContainerComponent } from './features/products/product-list-container/product-list-container.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { ProductService } from './_services/product.service';
import { ProductDetalisComponent } from './features/products/product-detalis/product-detalis.component';
import { NotFoundComponent } from './features/products/not-found/not-found.component';
import { ProductAddComponent } from './features/products/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductListContainerComponent,
    DropDownComponent,
    ProductDetalisComponent,
    NotFoundComponent,
    ProductAddComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
