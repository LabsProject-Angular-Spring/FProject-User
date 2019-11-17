import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  list = () => {
    return this.http.get("http://localhost:10020/user/list") // pETICIÓN GET
  }

}
