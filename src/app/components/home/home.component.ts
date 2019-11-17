import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Usuarios;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.list().subscribe(res => {
      this.Usuarios = res;
    })
  }

}
