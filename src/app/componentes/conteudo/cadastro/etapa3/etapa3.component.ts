import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Categoria } from '../../../../modelos/categoria.model';
import { Servico } from '../../../../modelos/servico.model';
import { ServicoCadastrado } from '../../../../modelos/servico_cadastrado.model';
import { CategoriaService } from '../../../../servicos/categoria.service';
import { ServicoService } from '../../../../servicos/servico.service';
import { CadastroService } from '../../../../servicos/cadastro.service'

@Component({
  selector: 'app-etapa3',
  templateUrl: './etapa3.component.html',
  styleUrls: ['./etapa3.component.css'],
  providers: [CategoriaService, ServicoService,]
})
export class Etapa3Component implements OnInit {
  
  public categorias: any[] = []
  public servicos: any[] = []
  public servicos_incluidos: any [] = []

  constructor(
    private categoriaService: CategoriaService,
    private servicoService: ServicoService,
    private cadastroService: CadastroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoriaService.getCategorias()
    .then(
      (resposta: any) => {
        this.categorias = resposta['categorias']
        console.log(this.categorias)
      }
    );
    this.servicos_incluidos = this.cadastroService.etapa3ServicosIncluidos
  }

  onChangeSelectCategoria(f) {
    this.servicoService.getSevicoPorCategoria(f.value.categoria)
      .then(           
        (resposta: any) => {
          this.servicos = resposta
        }
      )

  }

  incluirServico(f) {
    if ( this.servicos_incluidos.length < this.cadastroService.etapa2Plano_qt_servicos ) {
      let servico = {
        'servico': f.value.servico, 
        'descricao': f.value.descricao,
        'servico_id': this.servicos.find((servico) => servico.nome == f.value.servico).id }
      this.servicos_incluidos.push(servico)
    }
  }

  removerServico(servico){
    if (this.servicos_incluidos.length > 0 ) {
      this.servicos_incluidos.splice(this.servicos_incluidos.indexOf(servico),1)
    }
    
  }

  etapa4() {
     this.cadastroService.etapa3ServicosIncluidos = this.servicos_incluidos
     this.router.navigateByUrl('/cadastro/etapa4')
 }

}
