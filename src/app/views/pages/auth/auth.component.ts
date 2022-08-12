import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthentificationService } from '../../core/auth/authentification.service';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { LocalService } from 'src/app/core/shared/services/local.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  constructor( private auth: AuthentificationService,
    private routes:Router,
    private fb: FormBuilder,
    private local:LocalService) { }
    profileForm = this.fb.group({
      email: [''],
      password: [''],

    });
  ngOnInit(): void {


  }
 login()
 {
 
  this.auth.login(this.profileForm.value.email,this.profileForm.value.password).pipe(take(1)).subscribe(( data :any)=>{
console.log(data.token);

this.local.saveData('token',data.token);
this.local.saveData('name',data.name);

this.routes.navigate(['/']);
this.success();

  },
  error => {
    if (error.status === 401 || error.status === 403) {
      this.error('Combinaison Login/Mot de passe incorrecte !');
    } else {
      this.error('Une erreur s\'est produite. Veuillez essayer plus tard !');
    }
  })

 }
 register()
 {
this.routes.navigate(['/login']);
 }


 success() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: false,
    iconColor: '#00e8b6',
    color: '#06417d'
  })

  Toast.fire({
    icon: 'success',
    title: 'Login Réussi !'
  })
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
