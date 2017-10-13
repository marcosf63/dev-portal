import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Categoria } from '../../../../modelos/categoria.model';
import { Servico } from '../../../../modelos/servico.model';
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
  
  categorias: Categoria[] = []
  servicos: Servico[] = []
  servicos_incluidos: Servico[] = []
  nr_servicos = 3
  @ViewChild('formEtapa3') public formulario: NgForm
  formularioInvalido = false
  i: number = 1  // indice do serviço

  constructor(
    private categoriaService: CategoriaService,
    private servicoService: ServicoService,
    private cadastroService: CadastroService,
    private router: Router
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
          console.log(resposta)
          this.servicos = resposta
        }
      )

  }

  incluirServico(servico, categoria) {
    
    if (this.formulario.valid) {
      if (this.nr_servicos > 0) {
        this.nr_servicos--
        console.log(this.i)
        this.servicos_incluidos.push(new Servico(
          this.i, servico, new Categoria(
            this.i, categoria
          )
        ))
        this.i++
        
     }
     this.formularioInvalido = false
    } else {
      this.formularioInvalido = true
    }
  }

  removerServico(par){
    console.log(par)
  }

  etapa4() {
    if (this.formulario.valid) {
     this.router.navigateByUrl('/cadastro/etapa3')
    } else {
       
       this.formularioInvalido = true
 
    }

 }

}
