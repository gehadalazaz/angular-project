import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { options } from 'joi';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }



  login(body:any):Observable<{
    "person": {
        "_id":string,
        "email": string,
        "password":string,
        "__v": 0,
        "id": string
    },
    "token": string
}>{

    
return this.httpClient.post<{
  "person": {
      "_id":string,
      "email": string,
      "password":string,
      "__v": 0,
      "id": string
  },
  "token": string
}>(environment.baseUrl+'user/login',body)

  }

}
