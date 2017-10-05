import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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
    ResultadoPesquisaProComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
