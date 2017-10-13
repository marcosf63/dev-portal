import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Plano } from '../../../../modelos/plano.model';
import { PlanoService } from '../../../../servicos/plano.service';
import { CadastroService } from '../../../../servicos/cadastro.service'

@Component({
  selector: 'app-etapa2',
  templateUrl: './etapa2.component.html',
  styleUrls: ['./etapa2.component.css'],
  providers: [ PlanoService ]
})
export class Etapa2Component implements OnInit {

  planos: Plano[] = []
  @ViewChild('formEtapa2') public formulario: NgForm
  public formularioInvalido: Boolean = false
  public planoSelecionado: String

  constructor(
    private planoService: PlanoService,
    private cadastroService: CadastroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.planoSelecionado = this.cadastroService.etapa2Plano
    this.planoService.getPlanosPorTipo(this.cadastroService.etapa1PfOuPj)
      .then(
        (resposta: any) => this.planos = resposta 
      )
      .catch((erro: any) => console.log("Erro corrido:" + erro))
  }

  etapa3() {
     if (this.formulario.valid) {
      this.cadastroService.etapa2Plano = this.planoSelecionado
      this.router.navigateByUrl('/cadastro/etapa3')
     } else {
        
        this.formularioInvalido = true
  
     }

  }

}
