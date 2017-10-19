import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../../../../servicos/cadastro.service'

@Component({
  selector: 'app-etapa4',
  templateUrl: './etapa4.component.html',
  styleUrls: ['./etapa4.component.css'],

})
export class Etapa4Component implements OnInit {

  constructor(private cadastroService: CadastroService) { }

  ngOnInit() {
    console.log(this.cadastroService.etapa3ServicosIncluidos)
  }

  salvar(f) {
    this.cadastroService.etapa4nome = f.value.nome
    this.cadastroService.etapa4endereco = f.value.endereco
    this.cadastroService.etapa4cidade = f.value.cidade
    this.cadastroService.etapa4estado = f.value.estado
    this.cadastroService.etapa4cep = f.value.cep
    this.cadastroService.etapa4email = f.value.email
    this.cadastroService.etapa4senha = f.value.senha
    this.cadastroService.etapa4fixo1 = f.value.fixo1
    this.cadastroService.etapa4fixo2 = f.value.fixo2
    this.cadastroService.etapa4celular1 = f.value.celular1
    this.cadastroService.etapa4celular2 = f.value.celular2
    
    this.cadastroService.salvarUsuario()
      .then( () => console.log("estou aqui"))
      .catch( (erro) => console.log(erro))
  }

  getFile(fileInput) {
    
    this.cadastroService.etapa4foto = fileInput.target.files[0]
    console.log(this.cadastroService.etapa4foto)
  } 

}
