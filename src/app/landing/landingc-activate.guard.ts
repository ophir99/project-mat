import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LandingcActivate implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (sessionStorage.getItem("USER_TOKEN")) {
      this.router.navigateByUrl("/user");
    } else {
      return true;
    }
  }
}
