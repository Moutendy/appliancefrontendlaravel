import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './views/layout/layout.module';
import { DashbordComponent } from './views/pages/dashbord/dashbord.component';
import { AuthComponent } from './views/pages/auth/auth.component';
import { LoginComponent } from './views/pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    AuthComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
