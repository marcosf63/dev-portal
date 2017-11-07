import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from '../../../servicos/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public usuario_logado: boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(f) {
    
    this.authService.autorizar(f).then(
      () => {
        if (this.authService.access_token!=undefined) {
          this.usuario_logado = true
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
  }

}
