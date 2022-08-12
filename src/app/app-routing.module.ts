import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },

 { path: 'login', loadChildren: () => import('./views/pages/login/login.module').then(m => m.LoginModule) },

  {
    path:'',
    component: BaseComponent,
    children: [
      {
        path : 'user',
        loadChildren: () => import('./views/pages/user/user.module').then(m => m.UserModule)
      },
      {
        path : 'admin',
        loadChildren: () => import('./views/pages/admin/admin.module').then(m => m.AdminModule)
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
