import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  API = "http://localhost:9090/user";
  constructor(private http: HttpClient) {}

  //   createUser(user: User) {
  //     return this.http.post(`${this.API}/signup/`, user);
  //   }

  createUser = (user: User) => this.http.post(`${this.API}/signup/`, user);

  loginUser = (user: User) => this.http.post(`${this.API}/signin`, user);
}
