import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../shared/categoria.model';
import { Servico } from '../../../shared/servico.model';
import { CategoriaService } from '../../../servicos/categoria.service';
import { ServicoService } from '../../../servicos/servico.service'


@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css'],
  providers: [ CategoriaService, ServicoService ]
})
export class PesquisaComponent implements OnInit {

  categorias : Categoria[] = [];
  servicos: Servico[] = [];


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
  onChangeSelect(valor) {
    console.log(valor);
    this.servicoService.getSevicoPorCategoria(valor)
      .then(
        (resposta: any) => {this.servicos = resposta}
      )

  }

}
