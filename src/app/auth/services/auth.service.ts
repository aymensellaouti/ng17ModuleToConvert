import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { CredentialsDto } from "../dto/credentials.dto";
import { Observable, tap } from "rxjs";
import { LoginResponse } from "../dto/login-response.dto";

import { Router } from "@angular/router";
import { APP_API } from "../../config/api.config";
import { APP_ROUTES } from "../../config/routes.config";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  constructor() {}

  login(credentials: CredentialsDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(APP_API.login, credentials).pipe(
      // lorsqu'on a besoin d'un effet de bord
      tap((response) => {
        localStorage.setItem("token", response.id);
      })
    );
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate([APP_ROUTES.login]);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }
}
