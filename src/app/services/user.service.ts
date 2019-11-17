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
  register = (model) => {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json'); // Hacemos saber que es jSON
    return this.http.post("http://localhost:10020/user/add", model, { responseType: 'text' }) // pETICIÓN GET
  }
}
