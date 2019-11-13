import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Usuarios=[
    {
      Id: '1',
      Nombre: 'Javier Alarcón',
      Tipo: 'Estudiante',
      email: 'javier-alarconm@unilibre.edu.co'
    },
    {
      Id: '2',
      Nombre: 'Carmen Contreras',
      Tipo: 'Auxiliar',
      email: 'CClinx@gmail.com'
    },
    {
      Id: '3',
      Nombre: 'Mariana Reyes',
      Tipo: 'Estudiante',
      email: 'marianaj-reyesu@unilibre.edu.co'
    },
    {
      Id: '4',
      Nombre: 'Mauricio Alonso',
      Tipo: 'Docente',
      email: 'mauricio-alonsom@unilibre.edu.co'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
