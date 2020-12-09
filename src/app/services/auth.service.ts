import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
 
  baseUrl = "/api"

  //fonction de connexion
  login(email: string,password: string){
    return this.http.post(this.baseUrl+ "/login_check",{
       email,password
    })
  }


}
