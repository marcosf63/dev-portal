import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/navbar/login/login.component';
import { DestaqueComponent } from './componentes/conteudo/home/destaque/destaque.component';
import { MenuComponent } from './componentes/navbar/menu/menu.component';
import { AnunciosComponent } from './componentes/conteudo/home/anuncios/anuncios.component';
import { PesquisaComponent } from './componentes/conteudo/home/destaque/pesquisa/pesquisa.component';
import { CadastroComponent } from './componentes/conteudo/cadastro/cadastro.component';
import { HomeComponent } from './componentes/conteudo/home/home.component';
import { ResultadoPesquisaProComponent } from './componentes/conteudo/resultado-pesquisa-pro/resultado-pesquisa-pro.component';
import { Etapa1Component } from './componentes/conteudo/cadastro/etapa1/etapa1.component';
import { Etapa2Component } from './componentes/conteudo/cadastro/etapa2/etapa2.component';
import { Etapa3Component } from './componentes/conteudo/cadastro/etapa3/etapa3.component';
import { Etapa4Component } from './componentes/conteudo/cadastro/etapa4/etapa4.component';

import { CadastroService } from './servicos/cadastro.service';
import { AuthService } from './servicos/auth.service'
import { FinalCadastroComponent } from './componentes/conteudo/cadastro/final-cadastro/final-cadastro.component';
import { ConteudoComponent } from './componentes/conteudo/conteudo.component'
import { ServicoCadastradoService } from './servicos/servicos-cadastrados.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DestaqueComponent,
    MenuComponent,
    AnunciosComponent,
    PesquisaComponent,
    CadastroComponent,
    HomeComponent,
    ResultadoPesquisaProComponent,
    Etapa1Component,
    Etapa2Component,
    Etapa3Component,
    Etapa4Component,
    FinalCadastroComponent,
    ConteudoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [CadastroService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
