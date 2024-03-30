import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./components/first/first.component";
import { APP_ROUTES } from "./config/routes.config";
import { NF404Component } from "./components/nf404/nf404.component";

const routes: Routes = [
  { path: "", component: FirstComponent },
  {
    path: APP_ROUTES.cv,
    loadChildren: () => import("./cv/cv.module").then((m) => m.CvModule),
    data: {
      preload: true,
    },
  },
  {
    path: "todo",
    loadChildren: () => import("./todo/todo.module").then((m) => m.TodoModule),
  },
  { path: "**", component: NF404Component },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
