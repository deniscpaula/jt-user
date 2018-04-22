import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { error } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  user = new User();

  constructor(private userService: UserService,
    private router: Router) {

  }

  ngOnInit() {

  }

  save() {
    this.userService.save(this.user)
      .subscribe(user => {
        this.user = user;
        this.router.navigateByUrl('usuarios');
      }, error => alert(error));
  }
}
