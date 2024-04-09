import { Component } from "@angular/core";
import { Cv } from "../model/cv";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../service/cv.service";
import { Observable, catchError, distinctUntilChanged, filter, of } from "rxjs";
registerLocaleData(localeFr, "fr");
@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  today = new Date();
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;
  nbre = 0;
  cvs$: Observable<Cv[]>;
  constructor(private toastr: ToastrService, private cvService: CvService) {
    this.toastr.info("Bonjorur :D");
    this.cvs$ = this.cvService.getCvs().pipe(
      distinctUntilChanged(),
      catchError((e) => {
        this.toastr.error(`Les données sont fake, merci de contatcer l'admin`);
        return of(this.cvService.getFakeCvs());
      })
    );

    this.cvService.selectCv$.subscribe((cv) => {
      console.log("j ai recu", cv);
      this.nbre++;
      this.selectedCv = cv;
    });
  }
}
