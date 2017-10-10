import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/navbar/login/login.component';
import { DestaqueComponent } from './componentes/home/destaque/destaque.component';
import { MenuComponent } from './componentes/navbar/menu/menu.component';
import { AnunciosComponent } from './componentes/home/anuncios/anuncios.component';
import { PesquisaComponent } from './componentes/home/destaque/pesquisa/pesquisa.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { HomeComponent } from './componentes/home/home.component';
import { ResultadoPesquisaProComponent } from './componentes/resultado-pesquisa-pro/resultado-pesquisa-pro.component';
import { Etapa1Component } from './componentes/cadastro/etapa1/etapa1.component';
import { Etapa2Component } from './componentes/cadastro/etapa2/etapa2.component';
import { Etapa3Component } from './componentes/cadastro/etapa3/etapa3.component';
import { Etapa4Component } from './componentes/cadastro/etapa4/etapa4.component';

import { CadastroService } from './servicos/cadastro.service';
import { FinalCadastroComponent } from './componentes/cadastro/final-cadastro/final-cadastro.component';
import { ConteudoComponent } from './componente/conteudo/conteudo.component'

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
  providers: [CadastroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
