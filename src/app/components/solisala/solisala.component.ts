import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Soli} from '../../models/soli';
import {DynamicFormBuilder, DynamicFormGroup} from 'ngx-dynamic-form-builder';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import {UserService} from '../../services/user.service'
@Component({
  selector: 'app-solisala',
  templateUrl: './solisala.component.html',
  styleUrls: ['./solisala.component.scss']
})
export class SolisalaComponent implements OnInit {
  public form: DynamicFormGroup<Soli>;
  constructor(private us: UserService, private http: HttpClient, private fb: DynamicFormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group(Soli, {
      name: '', email: '', username: '', password: '', 
      usertype: ''
    });
  }
  save(){
     this.us.register(this.form.object).subscribe(data => {
       Swal.fire(
         'Atención!',
         'Guardado exitoso!',
         'success'
       )
    }
    )
  }
}
