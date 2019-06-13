import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { PostService } from "../post.service";

@Component({
  selector: "app-user-home",
  templateUrl: "./user-home.component.html",
  styleUrls: ["./user-home.component.scss"]
})
export class UserHomeComponent implements OnInit {
  post: FormControl;

  constructor(private router: Router, private postService: PostService) {
    this.post = new FormControl("dhsjkdskjdhs");
  }

  ngOnInit() {}

  logout() {
    sessionStorage.removeItem("USER_TOKEN");
    this.router.navigateByUrl("/");
  }

  createPost() {
    this.postService.new(this.post.value).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }
}
