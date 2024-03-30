import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "../auth/guards/auth.guard";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsComponent } from "./details/details.component";

export const CV_ROUTES: Routes = [
  { path: '', component: CvComponent },
  {
    path: 'add',
    component: AddCvComponent,
    canActivate: [authGuard],
  },
  { path: ':id', component: DetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(CV_ROUTES),
  ],
  exports: [RouterModule],
})
export class CvRoutingModule {}
