import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { UserService } from "../user.service";
import { User } from "../models/user.model";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  signUpForm: FormGroup;
  signInForm: FormGroup;
  signInFormToggle: boolean;
  showSpinner: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    // this.signUpForm = new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl()
    // });
    this.signUpForm = this.formBuilder.group({
      email: ["raj@i.com", [Validators.required, Validators.maxLength(5)]],
      password: []
    });

    this.signInForm = this.formBuilder.group({
      email: [],
      password: []
    });
  }

  ngOnInit() {
    this.signInFormToggle = false;
  }
  signUp() {
    this.showSpinner = true;
    this.userService.createUser(this.signUpForm.value as User).subscribe(
      res => {
        console.log(res);
        setTimeout(() => {
          this.snackBar.open("User created successfully", "", {
            duration: 2000
          });
          this.showSpinner = false;
          this.signUpForm.reset();
        }, 1000);
      },
      res => {
        console.log(res);
        setTimeout(() => {
          this.snackBar.open("Try Again", "", {
            duration: 2000
          });
          this.showSpinner = false;
        }, 1000);
      }
    );
  }

  signIn() {
    this.showSpinner = true;
    this.userService.loginUser(this.signInForm.value).subscribe(
      (res: any) => {
        setTimeout(() => {
          this.showSpinner = false;

          if (res.msg === "UserFound..") {
            sessionStorage.setItem("USER_TOKEN", res.token);
            this.snackBar.open("User Found..", "", { duration: 2000 });
            this.router.navigate(["/user"]);
          } else {
            this.snackBar.open("User Not Found. Try with other account", "", {
              duration: 2000
            });
          }
        }, 2000);
      },
      () => {
        this.showSpinner = false;
        this.snackBar.open("Something is wrong..again", "", {
          duration: 2000
        });
      }
    );
  }

  toggleSignInForm() {
    this.signInFormToggle = !this.signInFormToggle;
  }
}

// GUARDS;
/*
1. CanActivate Guard
2. CanDeActivate Guard */
