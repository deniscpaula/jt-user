import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.scss']
})
export class DetalheUsuarioComponent implements OnInit {

  user: User;
  
  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      let id = params['id'];
      this.user = await this.userService.get(id).toPromise();
    });
  }

}
