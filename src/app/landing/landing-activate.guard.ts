import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { of } from "rxjs";
import { MatSnackBar } from "@angular/material";
@Injectable({
  providedIn: "root"
})
export class LandingActivate implements CanActivate {
  constructor(private router: Router, private snackBar: MatSnackBar) {}
  canActivate() {
    console.log("Entering....");
    const token = sessionStorage.getItem("USER_TOKEN");
    if (token) {
      console.log("Token is there");
      return true;
    } else {
      console.log("Token is not there");
      this.snackBar.open("Please login to view this page", "", {
        duration: 2000
      });
      this.router.navigateByUrl("/");
      return false;
    }
  }
}
