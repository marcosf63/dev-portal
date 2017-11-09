import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from '../../../servicos/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public usuario_logado: boolean = false
  public consumidor: boolean = false
  public prestador: boolean = false
  public administrador: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(f) {
    
    this.authService.autorizar(f).then(
      () => {
        if (this.authService.access_token!=undefined) {
          this.usuario_logado = true
          if (this.authService.tipo == "Administrador") {
            this.administrador = true
            this.consumidor = false
            this.prestador = false
          }
          if (this.authService.tipo == "Prestador") {
            this.prestador = true
            this.administrador = false
            this.consumidor = false
          } 
          if (this.authService.tipo == "Consumidor") {
            this.consumidor = true
            this.prestador = false
            this.administrador = false
          }
        }
      }
    ).catch(
      (erro) => this.authService.mensagem = erro.json()['mensagem']
    )

    
    
  }

  logof() {
    this.authService.access_token=undefined
    this.authService.nome=undefined
    this.authService.tipo=undefined
    this.usuario_logado = false
    this.router.navigateByUrl('/')
  }

}
