import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PostService {
  API = "http://localhost:9090/posts";
  constructor(private http: HttpClient) {}

  new = (post: string) =>
    this.http.post(
      `${this.API}/new`,
      {
        post
      },
      {
        headers: new HttpHeaders().set(
          "Authorization",
          sessionStorage.getItem("USER_TOKEN")
        )
      }
    );

  get = () =>
    this.http.get(`${this.API}/all`, {
      headers: new HttpHeaders().set(
        "authorization",
        sessionStorage.getItem("USER_TOKEN")
      )
    });
}
