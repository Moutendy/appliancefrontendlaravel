import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../core/auth/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthentificationService,
    private routes:Router,
    private fb: FormBuilder) { }
  profileForm = this.fb.group({
    email: [''],
    password: [''],
    name: [''],
    password_confirmation: [''],

  });
  ngOnInit(): void {
    console.log('dsdd');

  }
  register()
  {
   console.log(this.profileForm.value);
  }
  login()
  {
 this.routes.navigate(['/auth']);
  }
}
