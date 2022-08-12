import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {


  readonly ApiUrl = environment.APIUrl;

  readonly httpOptions = {
    headers: new HttpHeaders().set(
      'Content-Type', 'application/x-www-form-urlencoded'
    )
  
    }
  constructor(private router: Router,
    private http: HttpClient
) { }


login(email: string, password: string) {
  let body = new URLSearchParams();
  body.set('email', email);
  body.set('password', password);
console.log(email);
  return this.http.post(this.ApiUrl + 'login', body, this.httpOptions)
}


register(email: string, password: string,nom:string,password_confirmation:string) {
  let body = new URLSearchParams();
  body.set('nom', nom);
  body.set('password_confirmation', password_confirmation);
  body.set('email', email);
  body.set('password', password);

  return this.http.post(this.ApiUrl + 'login', body, this.httpOptions)
}

isAuthenticated(): boolean {
  return localStorage.getItem('accessToken') != null;
}

getToken(){
  return localStorage.getItem('token');
}
getName(){
  return localStorage.getItem('name');
}
}
