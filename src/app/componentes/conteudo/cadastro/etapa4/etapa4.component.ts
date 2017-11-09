import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../../../../servicos/cadastro.service'
import { Router } from '@angular/router'
import { AuthService } from '../../../../servicos/auth.service'

@Component({
  selector: 'app-etapa4',
  templateUrl: './etapa4.component.html',
  styleUrls: ['./etapa4.component.css'],

})
export class Etapa4Component implements OnInit {

  constructor(
    private cadastroService: CadastroService, 
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  salvar(f) {
    this.cadastroService.etapa4nome = f.value.nome
    this.cadastroService.etapa4email = f.value.email
    this.cadastroService.etapa4senha = f.value.senha
    this.cadastroService.etapa4endereco = f.value.endereco
    this.cadastroService.etapa4cidade = f.value.cidade
    this.cadastroService.etapa4estado = f.value.estado
    this.cadastroService.etapa4cep = f.value.cep
    this.cadastroService.etapa4fixo1 = f.value.fixo1
    this.cadastroService.etapa4fixo2 = f.value.fixo2
    this.cadastroService.etapa4celular1 = f.value.celular1
    this.cadastroService.etapa4celular2 = f.value.celular2
    if (this.cadastroService.etapa1Prestatador == true){
      this.cadastroService.salvarUsuario()
      .then( () => this.router.navigateByUrl('/cadastro/final-cadastro'))
      .catch( (erro) => this.authService.mensagem = erro.json()['message'])
    } else {
      this.cadastroService.salvarConsumidor()
      .then(
        () => this.router.navigateByUrl('/cadastro/final-consumidor')
      ).catch(
        (erro) => this.authService.mensagem = erro.json()['message']
      )
    }
    
  }

  

}
