import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './navbar/login/login.component';
import { DestaqueComponent } from './home/destaque/destaque.component';
import { MenuComponent } from './navbar/menu/menu.component';
import { AnunciosComponent } from './home/anuncios/anuncios.component';
import { PesquisaComponent } from './home/destaque/pesquisa/pesquisa.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';

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
    HomeComponent
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
