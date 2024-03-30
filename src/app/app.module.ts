import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";

import { LoginComponent } from "./auth/login/login.component";
import { AuthInterceptor } from "./auth/interceptor/auth.interceptor";
import { FirstComponent } from "./components/first/first.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NF404Component } from "./components/nf404/nf404.component";
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    NavbarComponent,
    NF404Component,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
