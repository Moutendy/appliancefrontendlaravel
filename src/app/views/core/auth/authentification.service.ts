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


login(username: string, password: string) {
  let body = new URLSearchParams();
  body.set('username', username);
  body.set('password', password);

  return this.http.post(this.ApiUrl + 'login', body, this.httpOptions)
}

}
