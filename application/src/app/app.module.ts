import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { Webservice } from './services/webservice.service';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { DetalheUsuarioComponent } from './pages/detalhe-usuario/detalhe-usuario.component';
import { HistoryService } from './services/history.service';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HistoricoComponent,
    DetalheUsuarioComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpModule
  ],
  providers: [ UserService, HistoryService, Webservice ],
  bootstrap: [AppComponent]
})
export class AppModule { }
