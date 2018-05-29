import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {UserService} from './user/user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {TokenStorage} from './auth/token.storage';
import {AuthService} from './auth/auth.service';
import {Interceptor} from './auth/interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './core/material.module';
import { CoreModule } from './core/core.module';
import { LazyLoadModule } from './lazy-load/lazy-load.module';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    /*AppRoutingModule,*/
    LazyLoadModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    CoreModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [UserService, TokenStorage, AuthService, Interceptor,{provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
