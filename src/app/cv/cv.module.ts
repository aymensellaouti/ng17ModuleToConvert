import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { DetailCardComponent } from "./detail-card/detail-card.component";
import { EmbaucheComponent } from "./embauche/embauche.component";
import { ItemComponent } from "./item/item.component";
import { ListComponent } from "./list/list.component";
import { DefaultImagePipe } from "./pipes/default-image.pipe";
import { DetailsComponent } from "./details/details.component";
import { CvRoutingModule } from "./cv.routing";

@NgModule({
  declarations: [
    CvComponent,
    ItemComponent,
    ListComponent,
    DetailCardComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    AddCvComponent,
    DetailsComponent,
  ],
  imports: [CommonModule, FormsModule, CvRoutingModule],
})
export class CvModule {}
