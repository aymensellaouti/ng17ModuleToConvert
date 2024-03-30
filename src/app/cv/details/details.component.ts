import { Component, Input, OnInit, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../service/cv.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { EMPTY, Observable, catchError } from "rxjs";
import { AuthService } from "../../auth/services/auth.service";
import { APP_ROUTES } from "../../config/routes.config";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  cv!: Cv | null;
  @Input() id = 0;
  // On inject le CvService pour le récupérer
  cvService = inject(CvService);
  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);
  cv$!: Observable<Cv>;
  constructor() {}
  ngOnInit(): void {
    this.cv$ = this.cvService.getCvById(this.id).pipe(
      catchError((e) => {
        this.router.navigate([APP_ROUTES.cv]);
        return EMPTY;
      })
    );
    // .subscribe({
    //   next: (cv) => (this.cv = cv),
    //   error: (e) => this.router.navigate([APP_ROUTES.cv]),
    // });
  }
  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCvById(this.cv.id).subscribe({
        next: (cv) => {
          this.router.navigate([APP_ROUTES.cv]);
          this.toastr.success(`Le cv a été supprimé avec succès`);
        },
        error: (e) => console.log({ e }),
      });
    }
  }
}
