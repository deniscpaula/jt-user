import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { error } from 'util';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  user = new User();

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      let id = params['id'];
      if (id) {
        this.user = await this.userService.get(id).toPromise();
      }
    });
  }

  save() {
    if (this.user.id) {
      this.userService.update(this.user)
        .subscribe(user => {
          this.user = user;
          this.user = new User();
          alert("Atualizado com sucesso");
        }, error => alert(error));
        
    } else {
      this.userService.save(this.user)
        .subscribe(user => {
          this.user = user;
          this.user = new User();
          alert("Criado com sucesso");
        }, error => alert(error));
    }
  }
}
