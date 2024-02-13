import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { FormComponent } from "./form/form.component";
import { HomeComponent } from "./home/home.component";
import { NopagetodisplayComponent } from "./nopagetodisplay/nopagetodisplay.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "form", component: FormComponent },
  { path: "**", component: NopagetodisplayComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
