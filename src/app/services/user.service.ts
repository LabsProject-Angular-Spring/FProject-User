import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  list = () => {
    return this.http.get("http://localhost:10050/user/list") 
  }
  register = (model) => {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json'); 
    return this.http.post("http://localhost:10050/user/add", model, { responseType: 'text' }) 
  }
}
