import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../modelos/categoria.model';
import { Servico } from '../../modelos/servico.model';
import { CategoriaService } from '../../servicos/categoria.service';
import { ServicoService } from '../../servicos/servico.service'


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [ CategoriaService, ServicoService ]
})
export class CadastroComponent implements OnInit {
  etapaAtual: number = 1
  etapaAnterior: number = 0
  proximaEtapa: number = 2

  categorias: Categoria[] = []
  servicos: Servico[] = []

  constructor(
    private categoriaService: CategoriaService,
    private servicoService: ServicoService,
  ) { }

  ngOnInit() {
    this.categoriaService.getCategorias()
      .then(
        (resposta: any) => {this.categorias = resposta}
      );

    
  }
  
  onChangeSelectCategoria(valor) {
    this.servicoService.getSevicoPorCategoria(valor)
      .then(           
        (resposta: any) => {
          this.servicos = resposta
        }
      )

  }

  proximo() {
    if (this.etapaAtual !== 4) {
      this.etapaAnterior = this.etapaAtual
      this.etapaAtual++

    }
  }

  anterior() {
    if (this.etapaAtual !== 0 ) {
      this.etapaAtual--
      this.etapaAnterior = this.etapaAtual - 1
      
    }
  }

}
