import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthentificationService } from '../../core/auth/authentification.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor( private auth: AuthentificationService,
    private routes:Router,
    private fb: FormBuilder) { }
    profileForm = this.fb.group({
      email: [''],
      password: [''],

    });
  ngOnInit(): void {


  }
 login()
 {
  console.log(this.profileForm.value);
 }
 register()
 {
this.routes.navigate(['/login']);
 }
}
