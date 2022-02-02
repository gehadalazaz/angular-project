import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Category } from '../_models/category.model';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


categories:Category[]=[
  {id:1,name:"fruits"},
  {id:2,name:"vegetables"},
  {id:3,name:"diary"},
  {id:4,name:"bevereges"},
  {id:5,name:"bread"},
  {id:6,name:"meat"},
  {id:7,name:"frozen"},
  {id:8,name:"canned"}]








  constructor() {}

  getAllCategories():Category[] {
    return this.categories.splice(0);
    }

  getCategoryById(id:number):Category | undefined  {
return  this.categories.find(category=>category.id===id)
  }

  add(){}
  edit(){}
  delete(){}
}
