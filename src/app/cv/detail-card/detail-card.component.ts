import { Component, Input, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../service/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../service/cv.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css'],
})
export class DetailCardComponent {
  @Input()
  cv: Cv | null = null;
  embaucheService = inject(EmbaucheService);
  cvService = inject(CvService);
  toastr = inject(ToastrService);
  constructor() {}
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embaucher(this.cv)) {
        this.toastr.success(`${this.cv.firstname} ${this.cv.name} ajouté avec succès`)
      } else {
        this.toastr.warning(`${this.cv.name} est déjà préselectionnée`);
      }
    }
  }
}
