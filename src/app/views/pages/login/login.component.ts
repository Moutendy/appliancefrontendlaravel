import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { LocalService } from 'src/app/core/shared/services/local.service';
import Swal from 'sweetalert2';
import { AuthentificationService } from '../../core/auth/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any
  constructor(private auth: AuthentificationService,
    private routes: Router,
    private fb: FormBuilder,
    private local:LocalService) { }
  profileForm = this.fb.group({
    email: [''],
    password: [''],
    name: [''],
    password_confirmation: [''],

  });
  ngOnInit(): void {
   

  }
  register() {

    this.auth.register(this.profileForm.value.email, this.profileForm.value.password, this.profileForm.value.name, this.profileForm.value.password_confirmation).pipe(take(1)).subscribe((data:any) => {
      this.user=data;

this.local.saveData('token',data.token);
this.local.saveData('name',data.name);

this.routes.navigate(['/']);


    },
    error => {
      if (error.status === 401 || error.status === 403) {
        this.error('Combinaison Login/Mot de passe incorrecte !');
      } else {
        this.error('Une erreur s\'est produite. Veuillez essayer plus tard !');
      }
    }
)

  }
  login() {
    this.routes.navigate(['/auth']);
  }

  error(msg: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: false,
      color: '#06417d'
    })

    Toast.fire({
      icon: 'warning',
      title: msg
    })
  }
  

}
