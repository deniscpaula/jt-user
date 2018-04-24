import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  users: Array<User> = [];
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll()
      .subscribe(users => {
          this.users = users;
      }, error => console.log(error));
  }

  showUser(user: User) {
    this.router.navigate(['detalhe-usuario', { id: user.id }]);
  }

  addUser() {
    this.router.navigate(['cadastro']);
  }

  async delete(user: User) {
    event.preventDefault();
    event.stopPropagation();

    try {
      if (confirm(`Deseja excluir o usuário ${user.nome}?`)) {
        await this.userService.delete(user).toPromise();
        this.getUsers();
      }

    } catch (error) {
      alert('Não foi possível excluir o usuário');
    }
  }
}
