import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { UserHomeComponent } from "./user-home/user-home.component";
import { LandingActivate as UserHomeActivate } from "./landing/landing-activate.guard";
import { LandingcActivate } from "./landing/landingc-activate.guard";

const routes: Routes = [
  {
    path: "",
    canActivate: [LandingcActivate],
    component: LandingComponent
  },
  {
    path: "user",
    component: UserHomeComponent,
    canActivate: [UserHomeActivate]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
