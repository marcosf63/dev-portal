import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { Categoria } from '../../../../../modelos/categoria.model';
import { Servico } from '../../../../../modelos/servico.model';
import { CategoriaService } from '../../../../../servicos/categoria.service';
import { ServicoService } from '../../../../../servicos/servico.service'


@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css'],
  providers: [ CategoriaService, ServicoService ]
})
export class PesquisaComponent implements OnInit {

  public categorias : Categoria[] = [];
  public servicos: Servico[] = [];
  @ViewChild('pesquisaForm') public formulario: NgForm
  public valorSelectCategoria : String
  public valorSelectServico: String

  constructor( 
    private categoriaService: CategoriaService,
    private servicoService: ServicoService,
    private router: Router
              
  ) { }

  ngOnInit() {
    this.categoriaService.getCategorias()
      .then(
        (resposta: any) => {
          this.categorias = resposta
        }
      );
    
    
  }
  
  onChangeSelectCategoria(valor) {
    console.log(valor)
    this.servicoService.getSevicoPorCategoria(valor)
      .then(           
        (resposta2: any) => {
          this.servicos = resposta2
          console.log(this.servicos)
        }
      )
  }

  buscaServico(valor) {
     this.router.navigateByUrl(`/resultadoPesquisaPro/${valor}`)

  }

}
