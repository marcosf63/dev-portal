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
  public formularioInvalido: Boolean = false

  constructor(
    private planoService: PlanoService,
    private cadastroService: CadastroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.planoService.getPlanosPorTipo(this.cadastroService.etapa1PfOuPj)
      .then(
        (resposta: any) => this.planos = resposta 
      )
      .catch((erro: any) => console.log("Erro corrido:" + erro))
  }

  etapa3(f) {
     if (f.valid) {
      this.planos.forEach(p => {
        if (p.nome === f.value.plano) {
          this.cadastroService.etapa2Plano = p
        }
      });
      this.router.navigateByUrl('/cadastro/etapa3')
     } else {
        
        this.formularioInvalido = true
  
     }

  }

}
