import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../service/cv.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  @Input({ required: true }) cv!: Cv;
  @Input() size = 50;
  cvService = inject(CvService);
  onSelectCv() {
    this.cvService.selectCv(this.cv);
  }
}
