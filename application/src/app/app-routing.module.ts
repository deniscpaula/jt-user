import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { DetalheUsuarioComponent } from './pages/detalhe-usuario/detalhe-usuario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'detalhe-usuario', component: DetalheUsuarioComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: '**', component: CadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
