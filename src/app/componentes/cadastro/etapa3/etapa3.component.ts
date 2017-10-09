import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../modelos/categoria.model';
import { Servico } from '../../../modelos/servico.model';
import { CategoriaService } from '../../../servicos/categoria.service';
import { ServicoService } from '../../../servicos/servico.service';

@Component({
  selector: 'app-etapa3',
  templateUrl: './etapa3.component.html',
  styleUrls: ['./etapa3.component.css'],
  providers: [CategoriaService, ServicoService,]
})
export class Etapa3Component implements OnInit {
  
  categorias: Categoria[] = []
  servicos: Servico[] = []
  servicos_incluidos: Servico[] = []
  nr_servicos = 3

  constructor(
    private categoriaService: CategoriaService,
    private servicoService: ServicoService
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

  incluirServico(servico, categoria) {
    if (this.nr_servicos > 0) {
       this.nr_servicos--
       let i: number = 1
       this.servicos_incluidos.push(new Servico(
         i, servico, new Categoria(
           i, categoria
         )
       ))
       i++
    } else {
      console.log("Nao pode mais inluir servicos")
    }
  }

  removerServico(par){
    console.log(par)
  }

}
