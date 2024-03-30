import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../service/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input({ required: true }) cv!: Cv;
  @Input() size = 50;
  cvService = inject(CvService);
  // @Output() selectCv = new EventEmitter<Cv>();

  /**
   * emmetre un evenement informant sur le Cv qui a été sélectionné
   */
  onSelectCv() {
    this.cvService.selectCv(this.cv);
    // this.selectCv.emit(this.cv);
  }
}
